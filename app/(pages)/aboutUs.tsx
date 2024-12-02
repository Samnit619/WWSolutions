import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { Button, NativeBaseProvider } from "native-base";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "native-base";

const AboutUs = () => {
  const navigation = useNavigation();
  // "#6cb676", "#396ea1" colors
  return (
    <NativeBaseProvider>
      <LinearGradient
        className="h-screen "
        colors={["#ffffff", "#ffffff"]}
        start={{ x: 0.2, y: 0.2 }}
        end={{ x: 0.8, y: 1 }}
      >
        <ScrollView className="h-screen p-4 bg-transparent mb-10">
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
          <Text className="text-2xl font-semibold text-center my-3 text-[#333333] ">
            Executive Team
          </Text>
          <ScrollView
            className="relative gap-3"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <ImageBackground
              source={require("../../assets/images/aboutUs/ET6.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={5}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/ET6.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  President & CEO
                </Text>
                <Text className="mt-2 font-semibold text-black text-[17px]">
                  Eduardo Harari
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/ET5.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={5}
            >
              <View className="px-2 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/ET5.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  VP Consulting Services
                </Text>
                <Text className="mt-2 font-semibold text-black text-[17px]">
                  Geoff Parsons
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/ET7.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={5}
            >
              <View className="px-3 py-3 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/ET7.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  VP Latín America
                </Text>
                <Text className="mt-2 font-semibold text-black text-[16px]">
                  Jose Alejandro Bolivar
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/ET8.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/ET8.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  VP Human Resources
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  Rebecca Sarfatti
                </Text>
              </View>
            </ImageBackground>
          </ScrollView>
          <Text className="text-2xl font-semibold text-center my-4 text-[#333333] ">
            Management Team
          </Text>
          <ScrollView
            className="relative gap-3"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <ImageBackground
              source={require("../../assets/images/aboutUs/MT1.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/MT1.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-[11px]">
                  Director Cyber Analysis
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  Camila Ramirez
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/MT2.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/MT2.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  Director Cyber Security
                </Text>
                <Text className="mt-2 font-medium text-black text-[14px]">
                  Alvaro Felipe Rolon
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/MT3.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/MT3.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  Director of IT & IS
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  hugo Dardon
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/MT4.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/MT4.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mb-[-6] font-medium text-[#4c4c4c] text-xs">
                  Director Business Development Asia
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  Jeff Bromstein
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/MT5.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/MT5.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mb-[-6] font-medium text-[#4c4c4c] text-xs">
                  Director Web & Social Media
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  Rebecca Sarfatti
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/MT6.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-2 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/MT6.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  Director Operations
                </Text>
                <Text className="mt-2 font-medium text-black text-[14px]">
                  Lucía Delgado Meraz
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/MT7.jpeg")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/MT7.jpeg")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mb-[-6] font-medium text-[#4c4c4c] text-xs">
                  Director European & Middle East Operations
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  Sharon Fuks
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/MT8.png")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/MT8.png")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-[11px]">
                  Director Financial Planing
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  Susan Guaman
                </Text>
              </View>
            </ImageBackground>
          </ScrollView>
          <Text className="text-2xl font-semibold text-center my-3 text-[#333333] ">
            Cyber Security Team
          </Text>
          <ScrollView
            className="relative gap-3 flex"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View className="">
              {/*first view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS1.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS1.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[17px]">
                    Alasana Camara
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS2.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
                blurRadius={4}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS2.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[17px]">
                    Ali Mohammed
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View className="">
              {/*Second view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS3.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS3.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[17px]">
                    Boakai Kamara
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS4.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
                blurRadius={5}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS4.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-semibold text-black text-[16px]">
                    Clement Ekele
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View className="">
              {/*Second view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS5.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-3 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS5.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[16px]">
                    Emmanuel Nkachukwu
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS6.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
                blurRadius={5}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS6.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-semibold text-black text-[16px]">
                    Fernando Vidal
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View className="">
              {/*Second view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS7.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS7.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[17px]">
                    Gabriel M.
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS8.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
                blurRadius={5}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS8.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-semibold text-black text-[16px]">
                    Ibrahim Adeniji
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View className="">
              {/*Second view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS9.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS9.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[17px]">
                    Junaid Syed
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS10.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
                blurRadius={5}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS10.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-semibold text-black text-[16px]">
                    Menbere Kibret
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View className="">
              {/*Second view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS11.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS11.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[17px]">
                    Patrick Alimo
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS12.png")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
                blurRadius={5}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS12.png")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-semibold text-black text-[16px]">
                    Parth Srivastav
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View className="">
              {/*Second view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS13.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-3 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS13.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[16px]">
                    Runkai (Michael) Bai
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS14.png")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
                blurRadius={5}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS14.png")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-semibold text-black text-[16px]">
                    Shohely Akkas
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View className="">
              {/*Second view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS15.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS15.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[16px]">
                    Steve Ejoh
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS16.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden"
                blurRadius={5}
              >
                <View className="px-3 py-3 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS16.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-semibold text-black text-[16px]">
                    WangHsiang (Mark) Pan
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View className="">
              {/*Second view */}
              <ImageBackground
                source={require("../../assets/images/aboutUs/CS17.jpeg")}
                className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden mb-3"
                blurRadius={4}
              >
                <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                  <Image
                    source={require("../../assets/images/aboutUs/CS17.jpeg")}
                    className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                  />
                  <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                    Cyber Security Analyst
                  </Text>
                  <Text className="mt-2 font-medium text-black text-[16px]">
                    Yaroslav Leskiv
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
          <Text className="text-2xl font-semibold text-center my-3 text-[#333333] ">
            Operations Team
          </Text>
          <ScrollView
            className="relative gap-3 mb-16"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <ImageBackground
              source={require("../../assets/images/aboutUs/OT1.png")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden "
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/OT1.png")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  Sr. Consultant
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  Alejandro Alcala
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/OT2.png")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden "
              blurRadius={4}
            >
              <View className="px-2 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/OT2.png")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  Sr. Consultant
                </Text>
                <Text className="mt-2 font-medium text-black text-[15px]">
                  Jean Pierre Jurado
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/OT3.png")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden "
              blurRadius={4}
            >
              <View className="px-2 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/OT3.png")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  Sr. Consultant
                </Text>
                <Text className="mt-2 font-medium text-black text-[16px]">
                  Juan Pablo Florez
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/images/aboutUs/OT4.png")}
              className="h-[200px] w-[150px] justify-end rounded-lg overflow-hidden "
              blurRadius={4}
            >
              <View className="px-3 py-7 items-center bg-[#66cb74] h-[140px] justify-end rounded-t-[50px]  ">
                <Image
                  source={require("../../assets/images/aboutUs/OT4.png")}
                  className="h-[90px] w-[90px] rounded-full absolute top-[-35] "
                />
                <Text className="mt-1 font-medium text-[#4c4c4c] text-xs">
                  Sr. Consultant
                </Text>
                <Text className="mt-2 font-medium text-black text-[17px]">
                  Luciano Molteni
                </Text>
              </View>
            </ImageBackground>
          </ScrollView>
        </ScrollView>
      </LinearGradient>
    </NativeBaseProvider>
  );
};

export default AboutUs;
