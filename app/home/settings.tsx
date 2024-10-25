import { View, Text, Image } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <View className="p-6 bg-white h-screen">
      <Text className="text-4xl font-bold p-4">Settings</Text>
      <View className="flex-row items-center justify-between mt-6">
        <View className="flex-row gap-1">
          <Image
            source={require("../../assets/images/settings/themes.png")}
            className="h-[30px] w-[30px]"
          />
          <Text className="text-xl text-[#333333]">Themes</Text>
        </View>
        <Text className="text-xl pr-2 text-[#333333] font-semibold">&gt;</Text>
      </View>
      <View className="flex-row justify-between mt-7 ">
        <View className="flex-row gap-1">
          <Image
            source={require("../../assets/images/settings/username.png")}
            className="h-[30px] w-[30px]"
          />
          <Text className="text-xl text-[#333333] font-normal">Username</Text>
        </View>
        <Text className="text-xl pr-2 text-[#333333] font-semibold">&gt;</Text>
      </View>
    </View>
  );
};

export default Settings;
