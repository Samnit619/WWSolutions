import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { Image, ImageBackground, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

export default function Index() {
  const [fontLoaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <SafeAreaView className="bg-black">
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <ImageBackground
        className=" flex items-center h-screen justify-between"
        source={require("../assets/images/authpage.jpg")}
      >
        <View className="flex">
          <Image
            source={require("../assets/images/logoWWS.png")}
            resizeMode="contain"
            className="h-[100px] mt-14"
          />
        </View>
        <View className="flex justify-center items-center">
          <Text className=" text-[#ffffff] pb-7">
            Integrated Technology Solutions
          </Text>
          <View className="flex flex-row gap-3 justify-center mb-[35px]">
            <Link
              href={"/auth/Signin"}
              className="text-white bg-transparent border-2 border-white px-[60px] py-3 rounded-full font-bold"
            >
              Sign in
            </Link>
            <Link
              href={"/auth/Signup"}
              className="text-[#333333] bg-white border-2 border-white px-[60px] py-3 rounded-full font-bold "
            >
              Sign up
            </Link>
          </View>
          <Link
            href={"/home/homePage"}
            className="text-[#333333] bg-white border-2 border-white px-[60px] py-3 rounded-full font-bold mb-[80px] "
          >
            Home
          </Link>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
