import { View, Text, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View className="bg-white h-screen p-5">
      <View className="flex-col items-center justify-center mt-4">
        <Image
          source={require("../../assets/images/samnit123.jpg")}
          className="h-[120px] w-[120px] rounded-full mt-5 mb-3"
        />
        <Text className="text-3xl font-medium text-[#3e3e3e] p-1">
          Samnit Bagha
        </Text>
        <Text className="text-[#565656]">Lost in the right direction</Text>
      </View>
    </View>
  );
};

export default Profile;
