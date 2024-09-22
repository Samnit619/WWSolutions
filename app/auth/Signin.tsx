import { View, Text, Button, Pressable, Image, TextInput } from "react-native";
import React from "react";

const Signin = () => {
  return (
    //
    <View className=" h-screen px-3">
      <Pressable className="bg-blue-500 rounded-full px-4 py-3.5 mt-9 flex-row items-center">
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
      <TextInput
        placeholder="Username or email address"
        className="border-b-2 border-b-slate-500 placeholder:font-normal placeholder:text-slate-400 placeholder:text-[15px] h-[45px] mt-[40px] px-2"
      />
      <TextInput
        placeholder="Password"
        className="border-b-2 border-b-slate-500 placeholder:font-normal placeholder:text-slate-400 placeholder:text-[15px] h-[45px] mt-9 px-2"
      />
      <Pressable className="bg-yellow-500 rounded-full px-4 py-3.5 mt-[40px] flex-row items-center justify-center ">
        <Text className="text-black font-semibold">Login</Text>
      </Pressable>
      <Pressable className="flex justify-center items-center p-5">
        <Text className="text-slate-700">Forgot your password?</Text>
      </Pressable>
    </View>
  );
};

export default Signin;
