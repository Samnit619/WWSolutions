import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="p-4">
      {/* Header */}
      <View className="py-5">
        <Text className="text-stone-400 font-semibold text-2xl">Hello,</Text>
        <Text className="font-semibold text-2xl">Samnit Bagha</Text>
      </View>
      <View className="mb-6">
        <Text className="text-3xl font-bold text-gray-900">
          Integrated TechnologySolutions
        </Text>
        <Text className="text-lg text-gray-600 mt-2">
          Your partner in personalized IT consulting.
        </Text>
      </View>

      {/* Introduction */}
      <View className="mb-8">
        <Text className="text-base text-gray-700">
          We offer tailored IT solutions including networking, software
          development, and data recovery.
        </Text>
      </View>

      {/* Services Section */}
      <View className="flex-row justify-between">
        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-lg flex-1 mr-2"
          onPress={() => router.push("./services/networking")}
        >
          <Text className="text-white text-center">Networking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-lg flex-1 mx-2"
          onPress={() => router.push("./services/development")}
        >
          <Text className="text-white text-center">Development</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-lg flex-1 ml-2"
          onPress={() => router.push("./services/recovery")}
        >
          <Text className="text-white text-center">Recovery</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Section */}
      <View className="mt-8">
        <TouchableOpacity
          className="bg-green-600 p-4 rounded-lg"
          onPress={() => router.push("/homecontact")}
        >
          <Text className="text-white text-center">Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
