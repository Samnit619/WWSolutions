import { View, Text, Image } from "react-native";
import React from "react";
import { AlertDialog, Button, List, ScrollView } from "native-base";
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Company = () => {
  const navigation = useNavigation();
  //"#396ea1" blue #6cb676"
  return (
    <NativeBaseProvider>
      <ScrollView className="p-4 bg-white h-screen">
        <Button
          className="rounded-full w-7 bg-transparent "
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/images/ItSolutions/arrow.png")}
            className="w-7 h-7"
          />
        </Button>
        <Text className="text-3xl font-medium text-green-500 mt-3">
          OUR COMPANY
        </Text>
        <Text className="text-sm text-[#3e3e3e] font-medium">
          At WWS, our commitment is to establish a business presence for each
          client and an international identity which can be recognized through
          our outstanding business services.
        </Text>

        <LinearGradient
          colors={["#6cb676", "#ffffff"]}
          className="h-[300px] rounded-2xl mt-5 p-5"
        >
          <Text className="text-stone-100 text-2xl font-medium">
            20+ Years Providing
          </Text>
          <Text className=" text-2xl font-medium text-[#333333] mb-3">
            IT Solutions
          </Text>
          <View className="flex-row flex-wrap gap-2.5 ">
            <View className="bg-slate-50 rounded-xl px-4 py-3 flex-row items-center">
              <Text className="text-blue-400 font-extrabold text-[34px] pb-1.5 absolute left-1.5">
                |
              </Text>
              <Text className="text-[#333333] font-semibold pl-1.5">
                Personalize Services
              </Text>
            </View>
            <View className="bg-slate-50 rounded-xl px-4 py-3 flex-row items-center">
              <Text className="text-yellow-400 font-extrabold text-[34px] pb-1.5 absolute left-1.5">
                |
              </Text>
              <Text className="text-[#333333] font-semibold pl-1.5">
                Global Workforce
              </Text>
            </View>
            <View className="bg-slate-50 rounded-xl px-4 py-3 flex-row items-center">
              <Text className="text-orange-400 font-extrabold text-[34px] pb-1.5 absolute left-1.5">
                |
              </Text>
              <Text className="text-[#333333] font-semibold pl-1.5">
                User Experience
              </Text>
            </View>
            <View className="bg-slate-50 rounded-xl px-4 py-3 flex-row items-center">
              <Text className="text-red-400 font-extrabold text-[34px] pb-1.5 absolute left-1.5">
                |
              </Text>
              <Text className="text-[#333333] font-semibold pl-1.5">
                Quick Tips and Advice
              </Text>
            </View>
            <View className="bg-slate-50 rounded-xl px-4 py-3 flex-row items-center">
              <Text className="text-emerald-400 font-extrabold text-[34px] pb-1.5 absolute left-1.5">
                |
              </Text>
              <Text className="text-[#333333] font-semibold pl-1.5">
                Big Data & Analytics
              </Text>
            </View>
            <View className="bg-slate-50 rounded-xl px-4 py-3 flex-row items-center">
              <Text className="text-cyan-400 font-extrabold text-[34px] pb-1.5 absolute left-1.5">
                |
              </Text>
              <Text className="text-[#333333] font-semibold pl-1.5">
                Free Consultations
              </Text>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#51a2ee", "#396ea1"]}
          className="h-[280px] rounded-2xl p-5"
        >
          <View className="h-[150px] bg-white rounded-xl p-4">
            <Text className="text-[16px] font-medium text-[#333333]">
              WWS Inc. was able to connect Rogers with the appropriate contacts
              within the organizations to help develop new business
              relationships. Through WWS‘s support, a positive outcome for all
              parties involved was achieved.
            </Text>
          </View>
          <View className="bg-transparent p-3 w-[250px] rounded-xl">
            <Text className="text-[#e3e3e3] text-[16px] font-semibold">
              - Syndi Pak
            </Text>
            <View className="flex-row gap-8">
              <Text className="text-green-500 text-[16px] font-semibold">
                COO – Temerity Analytics Inc.
              </Text>
              <Image
                source={require("../../assets/images/company/comments.png")}
                className=" h-[60px] w-[60px]"
              ></Image>
            </View>
          </View>
        </LinearGradient>

        <View className="h-[350px] flex-row justify-end">
          <View className="flex-col absolute left-2 top-1">
            <Text className="text-[#333333] text-2xl mt-3 font-bold  ">
              Awards &
            </Text>
            <Text className="text-[#333333] text-2xl font-bold ">
              Recognition
            </Text>
          </View>
          <Image
            source={require("../../assets/images/company/trophy-star.png")}
            className="h-[150px] w-[150px] m-4 "
          />
          <View className="absolute bottom-3 left-5 bg-warning-400 w-[240px] py-2 px-3 rounded-xl ">
            <Text className="font-medium text-[#333333] text-[15px]">
              • 2015 Canada's Top 100 Employers
            </Text>
            <Text className="font-medium text-[#333333] text-[15px]">
              • 2013 MAPA Business Intelligence Partner of the Year Finalist
            </Text>
            <Text className="font-medium text-[#333333] text-[15px]">
              • 2013 Microsoft Partner of the Year Award Finalist
            </Text>
            <Text className="font-medium text-[#333333] text-[15px]">
              • 2011 CDN TOP 100 Solution Providers
            </Text>
            <Text className="font-medium text-[#333333] text-[15px]">
              • CRN Fast Grown 100
            </Text>
            <Text className="font-medium text-[#333333] text-[15px]">
              • The Stevies For Sales & Customer Service
            </Text>
          </View>
        </View>
        <View className="h-[250px] flex-row justify-start mb-5">
          <View className="flex-col absolute right-5 top-1 ">
            <Text className="text-[#333333] text-2xl mt-3 font-bold   ">
              Our Vision
            </Text>
            <Text className="text-[#333333] text-2xl font-bold pl-1">
              & Mission
            </Text>
          </View>
          <Image
            source={require("../../assets/images/company/target.png")}
            className="h-[150px] w-[150px] m-4 "
          />
          <View className="absolute bottom-4 right-5 bg-red-400 w-[250px] py-2 px-4 rounded-xl ">
            <Text className="text-[#ffffff] font-semibold text-[15px] ">
              Offer the best customized solution for all clients. To be a model
              of technological integration in the market worldwide To be
              recognized for our efficiency, effectiveness and quality.
            </Text>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Company;
