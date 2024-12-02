
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import InputField from "@/components/InputField";
import Card from "@/components/Card";
import { useUser } from "@clerk/clerk-react";
import { useFonts } from "expo-font";

export default function HomeScreen() {
  const { user } = useUser();
  const router = useRouter();
  const [userServices, setUserServices] = useState<any[]>([]); // State for purchased services
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredServices, setFilteredServices] = useState<any[]>([]); // State for filtered services

  const [loaded, error] = useFonts({
    "AirbnbCereal-Black": require("../../assets/fonts/AirbnbCereal-Black.otf"),
    "AirbnbCereal-Bold": require("../../assets/fonts/AirbnbCereal-Bold.otf"),
    "AirbnbCereal-ExtraBold": require("../../assets/fonts/AirbnbCereal-ExtraBold.otf"),
    "AirbnbCereal-Light": require("../../assets/fonts/AirbnbCereal-Light.otf"),
    "AirbnbCereal-Regular": require("../../assets/fonts/AirbnbCereal-Regular.otf"),
    "AirbnbCereal-SemiBold": require("../../assets/fonts/AirbnbCereal-SemiBold.otf"),
  });

  if (!loaded && !error) {
    return null;
  }

  useEffect(() => {
    if (user?.id) {
      // Fetch user data using the user ID
      axios
        .get(`http://192.168.68.56:5000/api/users/${user.id}`)
        .then((response) => {
          // Assuming the services are in response.data.services
          setUserServices(response.data.services || []);
          setFilteredServices(response.data.services || []);
        })
        .catch((error) => {
          console.error("Error fetching user services", error);
        });
    }
  }, [user]);

  // Handle search input change and filter services
  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    // Filter services based on the search query
    const filtered = userServices.filter((service) =>
      service.serviceName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  let profileUrl = user?.hasImage
    ? { uri: user.imageUrl }
    : require("../../assets/images/samnit123.jpg");

  const handleViewAll = () => {
    router.push("/(tabs)/projects")
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          className="p-4"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex flex-row items-center justify-between">
            <TouchableOpacity onPress={() => { router.push("/(tabs)/profile") }}>
              <Image source={profileUrl} className="w-11 h-11 rounded-full" />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-emerald-150 p-2 rounded-xl"
              onPress={() => {
                router.push("/(pages)/notification");
              }}
            >
              <Ionicons name="notifications-outline" size={28} />
            </TouchableOpacity>
          </View>

          <View className="mt-8">
            <Text className="font-semiBold text-lg text-[#17171B]">Welcome Back</Text>
            <Text className="font-semiBold text-4xl mt-2">Gurtaj Singh</Text>
            <View>
              <InputField
                icon="search-outline"
                value={searchQuery}
                onChangeText={handleSearchChange}
                containerStyle="mt-4"
              />
            </View>
          </View>

          <View className="mt-8">
            <View className="flex flex-row items-center justify-between">
              <Text className="font-semiBold text-lg">My Projects</Text>
              <TouchableOpacity className="bg-emerald-400 w-fit p-2 rounded-2xl" onPress={handleViewAll}>
                <Text className="font-semiBold">View all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
              {filteredServices.map((service, index) => (
                <Card
                  key={index}
                  title={service.serviceName}
                  consultant={service.consultant || "Jane Cooper"}
                  progress={Math.floor(Math.random() * 100)}
                  image={service.imageUrl || require("../../assets/images/hacking.jpg")}
                />
              ))}
            </ScrollView>
          </View>

          <View className="mt-8 mb-96">
            <View className="flex flex-row items-center justify-between">
              <Text className="font-semiBold text-lg">Today Tasks</Text>
              <TouchableOpacity className="bg-emerald-400 w-fit p-2 rounded-2xl">
                <Text className="font-semiBold">View all</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView >
  );
}

