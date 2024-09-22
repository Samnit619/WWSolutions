import { View, Text, Button, Pressable, Image, TextInput } from "react-native";
import React from "react";

const Signin = () => {
  return (
    //
    <View className=" h-screen px-3">
      <Pressable className="bg-blue-500 rounded-full px-4 py-3.5 mt-6 flex-row items-center">
        <Image
          source={require("../../assets/images/google.png")}
          className="h-[20px] w-[20px] rounded-full"
        />
        <Text className="text-white font-semibold ml-[95px]">
          Log in with Google
        </Text>
      </Pressable>
      <Pressable className="bg-[#3b5998] rounded-full px-4 py-3.5 mt-3 flex-row items-center">
        <Image
          source={require("../../assets/images/facebook.png")}
          className="h-[20px] w-[20px] rounded-full"
        />
        <Text className="text-white font-semibold ml-[95px]">
          Log in with Facebook
        </Text>
      </Pressable>
      <View className=" border-b border-b-[#cecece] mt-5"></View>
      <TextInput />
    </View>
  );
};

export default Signin;
