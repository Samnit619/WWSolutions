import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
const Signup = () => {
  const [clicked, setClicked] = useState(false);
  const CheckClick = () => {
    setClicked(!clicked);
  };
  return (
    <View className="h-screen px-3">
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
      <Pressable className="bg-yellow-500 rounded-full px-4 py-3.5 mt-3 flex-row items-center">
        <Image
          source={require("../../assets/images/mail.webp")}
          className="h-[20px] w-[20px] rounded-full"
        />
        <Text className="text-black font-semibold ml-[95px]">
          Log in with Email
        </Text>
      </Pressable>
      <View className="mt-6 flex-row justify-center items-center">
        <CheckBox onClick={CheckClick} isChecked={clicked}></CheckBox>
        <Text className="font-regular text-slate-600 ml-2">
          I agree to the{" "}
          <Text className="text-yellow-600">Terms and Services</Text> and
          <Text className="text-yellow-600"> Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
