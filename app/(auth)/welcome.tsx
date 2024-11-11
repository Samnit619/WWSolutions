import { Link } from "expo-router";
import { Image, ImageBackground, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView className="bg-black">
      <ImageBackground
        className=" flex items-center h-screen justify-between"
        source={require("../../assets/images/authpage.jpg")}
      >
        <View className="flex">
          <Image
            source={require("../../assets/images/logoWWS.png")}
            resizeMode="contain"
            className="h-[100px] mt-14"
          />
        </View>
        <View className="flex justify-center items-center mb-20">
          <Text className=" text-[#ffffff] pb-7">
            Integrated Technology Solutions
          </Text>
          <View className="flex flex-row gap-3 justify-center mb-[35px]">
            <Link
              href={"/(auth)/sign-in"}
              className="text-white bg-transparent border-2 border-white px-[60px] py-3 rounded-full font-bold"
            >
              Sign in
            </Link>
            <Link
              href={"/(auth)/sign-up"}
              className="text-[#333333] bg-white border-2 border-white px-[60px] py-3 rounded-full font-bold "
            >
              Sign up
            </Link>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Onboarding;
