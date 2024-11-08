import { View, Text, Image } from "react-native";
import React from "react";
import { Button, NativeBaseProvider } from "native-base";
import { useNavigation } from "expo-router";

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View className="h-screen p-4 bg-white">
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
          OUR TEAM
        </Text>
        <Text className="text-sm text-[#3e3e3e] font-medium">
          WWS has a network of consultants, industry experts, technical gurus
          and support staff that spans the globe, and offers clients a truly
          global perspective on a broad range of industries, markets, and
          technologies.
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default AboutUs;
