import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-expo";
import { Redirect, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Profile = () => {
  const { signOut } = useAuth();
  const { user } = useUser();

  const router = useRouter(); // Initialize router

  const handleSignOut = async () => {
    await signOut(); // Call signOut to log the user out
    router.replace("/welcome"); // Navigate to the welcome screen
  };

  let profileUrl = user?.hasImage
    ? { uri: user.imageUrl }
    : require("../../assets/images/samnit123.jpg");

  return (
    <LinearGradient
      className="h-screen "
      colors={["#6cb676", "#396ea1"]}
      start={{ x: 0.2, y: 0.2 }}
      end={{ x: 0.8, y: 1 }}
    >
      <View className="bg-transparent h-screen p-5">
        <View className="flex-col items-center justify-center mt-4">
          <Image
            source={profileUrl}
            className="h-[120px] w-[120px] rounded-full mt-5 mb-3"
          />
          <Text className="text-3xl font-medium text-[#333333] p-1">
            {user?.fullName}
          </Text>
          <Text className="text-[#3e3e3e] italic">
            Lost in the right direction
          </Text>
        </View>

        <View className="mt-8">
          <TouchableOpacity className="flex-row items-center justify-between bg-slate-200 rounded-lg px-4 py-3 mb-3 shadow-md">
            <Text className="text-lg text-[#333333]">Edit Profile</Text>
            <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
          </TouchableOpacity>

          {/* Account Settings */}
          <TouchableOpacity className="flex-row items-center justify-between bg-slate-200 rounded-lg px-4 py-3 mb-3 shadow-md">
            <Text className="text-lg text-[#333333]">Account Settings</Text>
            <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
          </TouchableOpacity>

          {/* Orders */}
          <TouchableOpacity className="flex-row items-center justify-between bg-slate-200 rounded-lg px-4 py-3 mb-3 shadow-md">
            <Text className="text-lg text-[#333333]">My Services</Text>
            <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
          </TouchableOpacity>

          {/* Favorites */}
          <TouchableOpacity className="flex-row items-center justify-between bg-slate-200 rounded-lg px-4 py-3 mb-3 shadow-md">
            <Text className="text-lg text-[#333333]">Favorites</Text>
            <Text className="text-xl text-[#3e3e3e] font-medium">&gt;</Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            onPress={handleSignOut}
            className="flex-row items-center justify-between bg-red-100 rounded-lg px-4 py-3 mt-6 shadow-md"
          >
            <Text className="text-lg text-red-600 font-medium">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Profile;
