import {
  ActivityIndicator,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import ProjectCard from "@/components/ProjectCard";
import { useFonts } from "expo-font";

const Projects = () => {
  const { user } = useUser();
  const [userProjects, setUserProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  // Fetch user projects
  const fetchProjects = async (userId: string) => {
    const apiUrl = `http://192.168.68.56:5000/api/users/${userId}`;
    try {
      const response = await axios.get(apiUrl);
      console.log("User data fetched successfully:", response.data.services);
      setUserProjects(response.data.services || []);
      setError(""); // Clear previous errors
    } catch (err: any) {
      console.error("Error fetching user data:", err.message);
      setError(err.message || "Failed to fetch projects.");
    } finally {
      setLoading(false);
      setRefreshing(false); // Stop refreshing
    }
  };


  const [loaded, err] = useFonts({
    "AirbnbCereal-Black": require("../../assets/fonts/AirbnbCereal-Black.otf"),
    "AirbnbCereal-Bold": require("../../assets/fonts/AirbnbCereal-Bold.otf"),
    "AirbnbCereal-ExtraBold": require("../../assets/fonts/AirbnbCereal-ExtraBold.otf"),
    "AirbnbCereal-Light": require("../../assets/fonts/AirbnbCereal-Light.otf"),
    "AirbnbCereal-Regular": require("../../assets/fonts/AirbnbCereal-Regular.otf"),
    "AirbnbCereal-SemiBold": require("../../assets/fonts/AirbnbCereal-SemiBold.otf"),
  });

  if (!loaded && !err) {
    return null;
  }


  // Initial fetch when user ID is available
  useEffect(() => {
    if (user?.id) {
      fetchProjects(user.id);
    }
  }, [user?.id]);

  // Refresh control handler
  const onRefresh = () => {
    setRefreshing(true);
    if (user?.id) {
      fetchProjects(user.id);
    }
  };

  if (loading) {
    return (
      <GestureHandlerRootView>
        <SafeAreaView className="bg-white flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#4CAF50" />
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-white h-full">
        <ScrollView
          className="p-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View className="mt-8">
            <Text className="text-4xl pt-1 font-semiBold">Projects</Text>
          </View>

          {/* Display Error */}
          {error ? (
            <Text className="text-red-500 text-center mt-4">{error}</Text>
          ) : null}

          {/* Display Projects */}
          {userProjects.length > 0 ? (
            userProjects.map((project, index) => (
              <ProjectCard
                key={project._id || index}
                title={project.serviceName}
                description={project.description}
                consultant="Jane Cooper"
                progress={Math.floor(Math.random() * 100)} // Replace with actual progress if available
                date={new Intl.DateTimeFormat("en-US", {
                  day: "2-digit",
                  month: "long",
                }).format(new Date(project.purchasedAt))}
              />
            ))
          ) : (
            <Text className="text-center mt-8">No projects found.</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Projects;
