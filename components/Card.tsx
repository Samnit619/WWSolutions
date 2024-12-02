
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const ProgressBar = ({ progress }: { progress: Number }) => {
  return (
    <View className="mt-6 w-full bg-gray-300 h-3 rounded-full overflow-hidden">
      {/* Dynamic progress */}
      <View
        className="h-full bg-emerald-400"
        style={{ width: `${progress}%` }} // Dynamic width based on progress
      />
    </View>
  );
};

const Card = ({
  title,
  consultant,
  progress,
  image,
}: {
  title: string;
  consultant: string;
  progress: number;
  image: any;
}) => {

  return (
    <View className="flex w-64 bg-gray-100 p-4 rounded-3xl mr-4">
      <Image source={image} className="w-56 h-40 rounded-2xl" />
      <View className="mt-6">
        <Text className="font-regular text-lg">{title}</Text>
        <Text className="mt-1 font-regular text-stone-500">{consultant}</Text>

        <ProgressBar progress={progress} />

        <View className="mt-6 flex flex-row items-center justify-between">
          <TouchableOpacity className="bg-gray-200 rounded-full p-2 w-fit">
            <Ionicons name="notifications-outline" size={24} />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center bg-gray-200 w-fit p-2 rounded-2xl" onPress={() => { router.push("/(tabs)/projects") }}>
            <Text className="font-semiBold pr-1">View all</Text>
            <Ionicons name="arrow-forward-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

