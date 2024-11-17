import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Settings = () => {
  return (
    <LinearGradient
      className="h-screen "
      colors={["#6cb676", "#396ea1"]}
      start={{ x: 0.2, y: 0.2 }}
      end={{ x: 0.8, y: 1 }}
    >
      <View className="p-6 bg-transparent h-screen">
        <Text className="text-4xl font-bold p-4">Settings</Text>

        {/* Themes */}
        <TouchableOpacity className="flex-row items-center justify-between mt-6 bg-slate-200 rounded-lg px-4 py-4 shadow-md">
          <View className="flex-row items-center gap-3">
            <Image
              source={require("../../assets/images/settings/themes.png")}
              className="h-[30px] w-[30px]"
            />
            <Text className="text-lg text-[#333333]">Themes</Text>
          </View>
          <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
        </TouchableOpacity>

        {/* Username */}
        <TouchableOpacity className="flex-row items-center justify-between mt-3 bg-slate-200 rounded-lg px-4 py-4 shadow-md">
          <View className="flex-row items-center gap-3">
            <Image
              source={require("../../assets/images/settings/username.png")}
              className="h-[30px] w-[30px]"
            />
            <Text className="text-lg text-[#333333]">Username</Text>
          </View>
          <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity className="flex-row items-center justify-between mt-3 bg-slate-200 rounded-lg px-4 py-4 shadow-md">
          <View className="flex-row items-center gap-3">
            <Image
              source={require("../../assets/images/settings/notification.png")}
              className="h-[30px] w-[30px]"
            />
            <Text className="text-lg text-[#333333]">Notifications</Text>
          </View>
          <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
        </TouchableOpacity>

        {/* Privacy */}
        <TouchableOpacity className="flex-row items-center justify-between mt-3 bg-slate-200 rounded-lg px-4 py-4 shadow-md">
          <View className="flex-row items-center gap-3">
            <Image
              source={require("../../assets/images/settings/privacy.png")}
              className="h-[30px] w-[30px]"
            />
            <Text className="text-lg text-[#333333]">Privacy</Text>
          </View>
          <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
        </TouchableOpacity>

        {/* Account */}
        <TouchableOpacity className="flex-row items-center justify-between mt-3 bg-slate-200 rounded-lg px-4 py-4 shadow-md">
          <View className="flex-row items-center gap-3">
            <Image
              source={require("../../assets/images/settings/account.png")}
              className="h-[30px] w-[30px]"
            />
            <Text className="text-lg text-[#333333]">Account</Text>
          </View>
          <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
        </TouchableOpacity>

        {/* Help & Support */}
        <TouchableOpacity className="flex-row items-center justify-between mt-3 bg-slate-200 rounded-lg px-4 py-4 shadow-md">
          <View className="flex-row items-center gap-3">
            <Image
              source={require("../../assets/images/settings/help.png")}
              className="h-[30px] w-[30px]"
            />
            <Text className="text-lg text-[#333333]">Help & Support</Text>
          </View>
          <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Settings;
