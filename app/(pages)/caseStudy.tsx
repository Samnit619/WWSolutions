import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, NativeBaseProvider, Row, ScrollView } from "native-base";

const CaseStudy = () => {
  const navigation = useNavigation();
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
          OUR PROJECTS
        </Text>
        <Text className="font-medium text-[#3e3e3e] mt-1">
          WWS is an experienced company, across the years we have been honored
          to serve great companies which have permitted us to display their
          success made possible by the services we provided. Check out this
          awesome case studies:
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="h-[210px]  flex-row gap-2 mt-3 overflow-visible"
        >
          <View className="h-[200px] w-[320px] bg-cyan-200 mt-3 rounded-xl overflow-hidden ">
            <ImageBackground
              source={require("../../assets/images/CaseStudy/MovieStar.jpg")}
              className=" h-[200px] w-[320px] justify-between"
            >
              <Text className="text-white font-semibold text-lg p-4">
                Movistar
              </Text>
              <View className="h-[60px] bg-stone-400/75 rounded-lg mx-2 mb-2 p-3 items-center justify-center">
                <Text className="text-white font-medium">
                  Solutions: Network Technology Services, Vendor Management.
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View className="h-[200px] w-[320px] bg-cyan-200 mt-3 rounded-xl overflow-hidden">
            <ImageBackground
              source={require("../../assets/images/CaseStudy/ScotiaBank.jpg")}
              className=" h-[200px] w-[320px] justify-between"
            >
              <Text className="text-white font-semibold text-lg p-4">
                ScotiaBank
              </Text>
              <View className="h-[60px] bg-blue-400/75 rounded-lg mx-2 mb-2 p-3 items-center justify-center">
                <Text className="text-white font-medium">
                  Solutions Provided: Vendor Management, Contract Management
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View className="h-[200px] w-[320px] bg-cyan-200 mt-3 rounded-xl overflow-hidden">
            <ImageBackground
              source={require("../../assets/images/CaseStudy/Vonage.jpg")}
              className=" h-[200px] w-[320px] justify-between "
            >
              <Text className="text-white font-semibold text-lg p-4">
                Vonage
              </Text>
              <View className="h-[60px] bg-violet-400/75 rounded-lg mx-2 mb-2 p-3 items-center justify-center">
                <Text className="text-white font-medium">
                  Solution: Technical Support Management.
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <Text className="text-2xl font-semibold my-3">Abu Dhabi</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="gap-2"
        >
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Andaz.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-blue-300 h-[40px] mt-[-21px] p-2 rounded-2xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[16px] font-semibold ">
                Andaz Capital Gates
              </Text>
            </View>
          </View>
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Etihad.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-yellow-600 h-[40px] mt-[-21px] p-2 rounded-2xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[16px] font-semibold ">
                Etihad Towers
              </Text>
            </View>
          </View>

          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Hyatt.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-cyan-400 h-[40px] mt-[-21px] p-2 rounded-2xl shadow-sm shadow-black ">
              <Text className=" text-white text-[16px] font-semibold ">
                Grand Hyatt
              </Text>
            </View>
          </View>
        </ScrollView>
        <Text className="text-2xl font-semibold my-3">Brasil</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="gap-2 mb-2"
        >
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Altino.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-slate-200 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-[#3e3e3e] rounded-xl text-[16px] font-semibold ">
                Altino Arantes Building
              </Text>
            </View>
          </View>
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Birman.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-stone-500 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[16px] font-semibold ">
                Birman Building
              </Text>
            </View>
          </View>

          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Sede.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-yellow-800 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[16px] font-semibold ">
                Sede do BankBoston
              </Text>
            </View>
          </View>
        </ScrollView>
        <Text className="text-2xl font-semibold my-3">Doja, Qatar</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="gap-2 mb-2"
        >
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Doha.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-stone-200 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-[#3e3e3e] rounded-xl text-[15px] font-semibold ">
                Four Seasons Hotel Doha
              </Text>
            </View>
          </View>
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/WestBay.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-blue-300 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[14px] font-semibold ">
                Forty-Four West Bay Tower
              </Text>
            </View>
          </View>

          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Kempinski.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-yellow-600 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[15px] font-semibold ">
                Kempinski Residences
              </Text>
            </View>
          </View>
        </ScrollView>
        <Text className="text-2xl font-semibold my-3">Kuwait</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="gap-2 mb-2"
        >
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Arabiya.jpg")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-stone-200 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-[#3e3e3e] rounded-xl text-[15px] font-semibold ">
                Arabiya Tower
              </Text>
            </View>
          </View>
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Arraya.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-yellow-700 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[14px] font-semibold ">
                Arraya Tower
              </Text>
            </View>
          </View>

          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Panasonic.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-cyan-600 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[15px] font-semibold ">
                Panasonic Tower
              </Text>
            </View>
          </View>
        </ScrollView>
        <Text className="text-2xl font-semibold my-3">Venezuela</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="gap-2 mb-4"
        >
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Casa.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-green-300 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-[#3e3e3e] rounded-xl text-[15px] font-semibold ">
                Casa De La Moneda
              </Text>
            </View>
          </View>
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/EuroBuilding.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-yellow-600 h-[40px] mt-[-21px] py px-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-white text-[13px] font-semibold ">
                EuroBuilding Hotel
              </Text>
              <Text className=" text-white text-[13px] font-semibold ">
                & Suites Caracas, Maiquetia
              </Text>
            </View>
          </View>

          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/Empresas.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-stone-300 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-[#3e3e3e] rounded-xl text-[15px] font-semibold ">
                Empresas Polar
              </Text>
            </View>
          </View>
          <View className="items-center h-[280px] ">
            <View className="h-[250px] w-[200px] bg-cyan-400 rounded-xl overflow-hidden">
              <ImageBackground
                source={require("../../assets/images/CaseStudy/JW.png")}
                className="h-[250px] w-[200px]"
              />
            </View>
            <View className=" bg-yellow-600 h-[40px] mt-[-21px] p-2 rounded-xl shadow-sm shadow-black ">
              <Text className=" text-white rounded-xl text-[14px] font-semibold ">
                JW Marriott Hotel Caracas
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CaseStudy;
