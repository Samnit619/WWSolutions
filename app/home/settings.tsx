import { View, Text, Image } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <View className="p-6 bg-white h-screen">
      <Text className="text-4xl font-bold p-4">Settings</Text>
      <View className="flex-row items-center justify-between mt-6 bg-slate-300 rounded-lg px-2 py-4 ">
        <View className="flex-row gap-1.5">
          <Image
            source={require("../../assets/images/settings/themes.png")}
            className="h-[30px] w-[30px]"
          />
          <Text className="text-lg text-[#333333]">Themes</Text>
        </View>
        <Text className="text-xl pr-2 text-[#3e3e3e] font-medium">&gt;</Text>
      </View>
      <View className="flex-row justify-between mt-3 bg-slate-300 rounded-lg px-2 py-4 ">
        <View className="flex-row gap-1.5">
          <Image
            source={require("../../assets/images/settings/username.png")}
            className="h-[30px] w-[30px]"
          />
          <Text className="text-lg  text-[#333333] font-normal">Username</Text>
        </View>
        <Text className="text-xl pr-2 text-[#3e3e3e] font-medium">&gt;</Text>
      </View>
    </View>
  );
};

export default Settings;
