import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const { user } = useUser();
  const router = useRouter();

  let profileUrl = user?.hasImage
    ? { uri: user.imageUrl }
    : require("../../../assets/images/samnit123.jpg")

  return (

    <View className="p-4 bg-white h-screen">
      <SignedIn>
        {/* Header */}
        <View className="py-4 px-4 flex-row justify-between items-center">
          <View>
            <Text className="text-stone-400 font-semibold text-2xl">Hello,</Text>
            <Text className="font-semibold text-2xl">{user?.fullName}</Text>
          </View>
          <View>
            <Image
              source={profileUrl}
              className="h-[57px] w-[57px] rounded-full"
            />
          </View>
        </View>
        <View className="mx-2">
          <TextInput
            className="h-[45px] px-5 bg-[#e3e3e3] rounded-xl border-2 border-stone-300 font-semibold placeholder:font-inter placeholder:font-semibold placeholder:text-stone-300 text-stone-500 text-base"
            placeholder="Search"
          />
        </View>
        <Text className="font-semibold text-[30px] mt-3 px-4">Explore More,</Text>
        <View className="flex-row flex-wrap gap-2 mt-2 justify-center">
          <TouchableOpacity
            onPress={() => { router.push("/(pages)/itSolutions") }}
            className="bg-transparent h-[130px] w-[160px] rounded-xl flex-row justify-end items-end overflow-hidden">
            <ImageBackground
              source={require("../../../assets/images/ITSolutions.png")}
              resizeMode="cover"
              className="h-[100%] w-[100%] flex justify-end items-end"
            >
              <Text className="font-semibold text-white p-3">IT Solutions</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { router.push("/(pages)/caseStudy") }}
            className="bg-orange-400 h-[130px] w-[160px] rounded-xl flex-row justify-end items-end overflow-hidden">
            <ImageBackground
              source={require("../../../assets/images/caseStudy.png")}
              resizeMode="cover"
              className="h-[100%] w-[100%] flex justify-end items-end"
            >
              <Text className="font-semibold text-white p-3">Case Studies</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity className="bg-orange-400 h-[130px] w-[160px] rounded-xl flex-row justify-end items-end overflow-hidden">
            <ImageBackground
              source={require("../../../assets/images/company.png")}
              resizeMode="cover"
              className="h-[100%] w-[100%] flex justify-end items-end"
            >
              <Text className="font-semibold text-white p-3">Our Company</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity className="bg-orange-400 h-[130px] w-[160px] rounded-xl flex-row justify-end items-end overflow-hidden">
            <ImageBackground
              source={require("../../../assets/images/blog.png")}
              resizeMode="cover"
              className="h-[100%] w-[100%] flex justify-end items-end"
            >
              <Text className="font-semibold text-white p-3">Blog and Posts</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-orange-400 h-[130px] w-[160px] rounded-xl flex-row justify-end items-end overflow-hidden"
            onPress={() => router.push("/(pages)/contact")}
          >
            <ImageBackground
              source={require("../../../assets/images/aboutus.png")}
              resizeMode="cover"
              className="h-[100%] w-[100%] flex justify-end items-end"
            >
              <Text className="font-semibold text-white p-3">Contact Us</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity className="bg-orange-400 h-[130px] w-[160px] rounded-xl flex-row justify-end items-end overflow-hidden">
            <ImageBackground
              source={require("../../../assets/images/contact.png")}
              resizeMode="cover"
              className="h-[100%] w-[100%] flex justify-end items-end"
            >
              <Text className="font-semibold text-white p-3">About Us</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View >
  )
}
