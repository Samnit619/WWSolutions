
import { Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <View className="w-32 bg-gray-300 h-3 rounded-full overflow-hidden">
      <View
        className="h-full bg-emerald-400"
        style={{ width: `${progress}% ` }} // Dynamic width based on progress
      />
    </View>
  );
};

const ProjectCard = ({ title, description, consultant, progress, date }: {
  title: string;
  description: string;
  consultant: string;
  progress: number;
  date: string;
}) => {

  const [loaded, error] = useFonts({
    "AirbnbCereal-Black": require("../assets/fonts/AirbnbCereal-Black.otf"),
    "AirbnbCereal-Bold": require("../assets/fonts/AirbnbCereal-Bold.otf"),
    "AirbnbCereal-ExtraBold": require("../assets/fonts/AirbnbCereal-ExtraBold.otf"),
    "AirbnbCereal-Light": require("../assets/fonts/AirbnbCereal-Light.otf"),
    "AirbnbCereal-Regular": require("../assets/fonts/AirbnbCereal-Regular.otf"),
    "AirbnbCereal-SemiBold": require("../assets/fonts/AirbnbCereal-SemiBold.otf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="bg-emerald-100 rounded-xl p-8 mt-8">
      <View className="flex flex-row items-center justify-between">
        <Image
          source={require("../assets/images/hacking.jpg")}
          className="rounded-full w-28 h-28 mb-4"
        />
        <TouchableOpacity>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={50}
            className="mr-8"
            onPress={() => { router.push("/(pages)/projectPage") }}
          />
        </TouchableOpacity>
      </View>
      <Text className="font-Bold text-xl">{title}</Text>
      <View className="flex flex-row items-center justify-start gap-2 my-2">
        <Ionicons name="calendar-outline" size={18} />
        <Text className="font-light">{date}</Text>
      </View>
      <Text className="text-base font-regular">{description}</Text>
      <View className="flex flex-row items-center justify-between mt-4">
        <Text className="font-regular text-base">{consultant}</Text>
        <ProgressBar progress={progress} />
      </View>
    </View>
  );
};

export default ProjectCard;
