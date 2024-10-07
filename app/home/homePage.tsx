import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="p-4 bg-white h-screen">
      {/* Header */}
      <View className="py-4 px-4 flex-row justify-between items-center">
        <View>
          <Text className="text-stone-400 font-semibold text-2xl">Hello,</Text>
          <Text className="font-semibold text-2xl">Samnit Bagha</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/samnit123.jpg")}
            className="h-[57px] w-[57px] rounded-full"
          />
        </View>
      </View>
      <Text className="font-semibold text-[30px] mt-3 px-4">Explore More,</Text>
      <View className="flex-row flex-wrap gap-2 mt-2 justify-center">
        <TouchableOpacity className="bg-transparent h-[130px] w-[185px] rounded-xl flex-row justify-end items-end overflow-hidden">
          <ImageBackground
            source={require("../../assets/images/ITSolutions.png")}
            resizeMode="cover"
            className="h-[100%] w-[100%] flex justify-end items-end"
          >
            <Text className="font-semibold text-white p-3">IT Solutions</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-400 h-[130px] w-[185px] rounded-xl flex-row justify-end items-end overflow-hidden">
          <ImageBackground
            source={require("../../assets/images/caseStudy.png")}
            resizeMode="cover"
            className="h-[100%] w-[100%] flex justify-end items-end"
          >
            <Text className="font-semibold text-white p-3">Case Studies</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-400 h-[130px] w-[185px] rounded-xl flex-row justify-end items-end overflow-hidden">
          <ImageBackground
            source={require("../../assets/images/company.png")}
            resizeMode="cover"
            className="h-[100%] w-[100%] flex justify-end items-end"
          >
            <Text className="font-semibold text-white p-3">Our Company</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-400 h-[130px] w-[185px] rounded-xl flex-row justify-end items-end overflow-hidden">
          <ImageBackground
            source={require("../../assets/images/blog.png")}
            resizeMode="cover"
            className="h-[100%] w-[100%] flex justify-end items-end"
          >
            <Text className="font-semibold text-white p-3">Blog and Posts</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-orange-400 h-[130px] w-[185px] rounded-xl flex-row justify-end items-end overflow-hidden"
          onPress={() => router.push("/home/contact")}
        >
          <ImageBackground
            source={require("../../assets/images/aboutus.png")}
            resizeMode="cover"
            className="h-[100%] w-[100%] flex justify-end items-end"
          >
            <Text className="font-semibold text-white p-3">Contact Us</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-400 h-[130px] w-[185px] rounded-xl flex-row justify-end items-end overflow-hidden">
          <ImageBackground
            source={require("../../assets/images/contact.png")}
            resizeMode="cover"
            className="h-[100%] w-[100%] flex justify-end items-end"
          >
            <Text className="font-semibold text-white p-3">About Us</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}
