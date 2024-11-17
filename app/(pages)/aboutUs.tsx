import { View, Text, Image } from "react-native";
import React from "react";
import { Button, NativeBaseProvider } from "native-base";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "native-base";

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <LinearGradient
        className="h-screen "
        colors={["#6cb676", "#396ea1"]}
        start={{ x: 0.2, y: 0.2 }}
        end={{ x: 0.8, y: 1 }}
      >
        <ScrollView className="h-screen p-4 bg-transparent">
          <Button
            className="rounded-full w-7 bg-transparent "
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../assets/images/ItSolutions/arrow.png")}
              className="w-7 h-7"
            />
          </Button>
          <Text className="text-3xl font-medium text-green-200 mt-3">
            OUR TEAM
          </Text>
          <Text className="text-sm text-[#3e3e3e] font-medium">
            WWS has a network of consultants, industry experts, technical gurus
            and support staff that spans the globe, and offers clients a truly
            global perspective on a broad range of industries, markets, and
            technologies.
          </Text>
        </ScrollView>
      </LinearGradient>
    </NativeBaseProvider>
  );
};

export default AboutUs;
