import { View, Text, Image } from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import { Button, NativeBaseProvider, ScrollView } from "native-base";

const Cloud = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <ScrollView className="p-4 h-screen bg-white">
        <Button
          className="rounded-full w-7 bg-transparent "
          onPress={() => router.push("/(pages)/itSolutions")}
        >
          <Image
            source={require("../../../assets/images/ItSolutions/arrow.png")}
            className="w-7 h-7"
          />
        </Button>
        <Text className="text-3xl font-medium text-green-500 mt-3">
          Cloud Consulting and Implementation
        </Text>
        <Text className="text-sm text-[#3e3e3e] font-medium mt-2">
          We analyze your current business computing environment and determine
          if cloud computing is the right solution for your business. Our
          suggested cloud computing approach can help you make the most of the
          current cloud technology.
        </Text>
        <Text className="text-[#3e3e3e] font-semibold text-2xl text-center mt-5 ">
          Strategic Alliances
        </Text>
        {/* List of alliaces*/}
        <View className="mt-3 mb-5 p-2 ">
          <View className="flex-row items-center gap-2 ">
            <Image
              source={require("../../../assets/images/ItSolutions/amazon.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-3">Amazon Cloud</Text>
          </View>
          <View className="flex-row items-center gap-3 ">
            <Image
              source={require("../../../assets/images/ItSolutions/dell.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-3">Dell EMC</Text>
          </View>
          <View className="flex-row items-center gap-3 ">
            <Image
              source={require("../../../assets/images/ItSolutions/google.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-2">Google Cloud</Text>
          </View>
          <View className="flex-row items-center gap-3 ">
            <Image
              source={require("../../../assets/images/ItSolutions/ibm.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-2">IBM Cloud</Text>
          </View>
          <View className="flex-row items-center gap-3 ">
            <Image
              source={require("../../../assets/images/ItSolutions/ingram.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-2">
              Ingram Cloud Services
            </Text>
          </View>
          <View className="flex-row items-center gap-3 ">
            <Image
              source={require("../../../assets/images/ItSolutions/jolera.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-2">Jolera</Text>
          </View>
          <View className="flex-row items-center gap-3 ">
            <Image
              source={require("../../../assets/images/ItSolutions/azure.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-2">Microsoft Azure</Text>
          </View>
          <View className="flex-row items-center gap-2 ">
            <Image
              source={require("../../../assets/images/ItSolutions/pax.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-2">Pax 8 Cloud</Text>
          </View>
          <View className="flex-row items-center gap-2 ">
            <Image
              source={require("../../../assets/images/ItSolutions/tng.png")}
              className="h-[65px] w-[65px] "
              resizeMode="contain"
            />
            <Text className="text-[#333333] text-xl mb-2">
              TNG Cloud WorkSpace
            </Text>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Cloud;
