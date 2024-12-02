import CustomButton from "@/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Button, NativeBaseProvider } from "native-base";
import { Image, ImageBackground, Text, View, StatusBar, } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { router } from "expo-router";

const Onboarding = () => {

  const router = useRouter();

  const [loaded, error] = useFonts({
    'AirbnbCereal-Black': require('../../assets/fonts/AirbnbCereal-Black.otf'),
    'AirbnbCereal-Bold': require('../../assets/fonts/AirbnbCereal-Bold.otf'),
    'AirbnbCereal-ExtraBold': require('../../assets/fonts/AirbnbCereal-ExtraBold.otf'),
    'AirbnbCereal-Light': require('../../assets/fonts/AirbnbCereal-Light.otf'),
    'AirbnbCereal-Regular': require('../../assets/fonts/AirbnbCereal-Regular.otf'),
    'AirbnbCereal-SemiBold': require('../../assets/fonts/AirbnbCereal-SemiBold.otf'),
  })

  if (!loaded && !error) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView className="p-8 bg-white" >
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>


          <View className="flex flex-row justify-between items-center">
            <Text className="font-inter font-bold text-2xl">WWSolutions</Text>

            <TouchableOpacity>
              <Ionicons name="reorder-three-outline" size={42} />
            </TouchableOpacity>
          </View>

          <Text style={{ fontFamily: "AirbnbCereal-Bold" }} className="text-4xl mt-12">
            Welcome to IT solutions that drive your success.
          </Text>
          <Text className="font-regular text-stone-600 ext-md my-4">
            Discover tailored IT consulting, networking, and software solutions designed to enhance productivity, secure data, and empower your business growth.
          </Text>
          <Image source={require("../../assets/images/rb_6024.png")} className="w-full h-96" />

          <CustomButton className="my-8" title="Get Started" bgVariant="black" onPress={() => router.push("/(tabs)/home")} />


          < View >

            <Text className="font-Bold text-4xl mt-12">Our Services</Text>
            <Text className="text-stone-600 font-regular text-md my-4">
              Empowering Your Business with Personalized IT Solutions and Expert Services Across All Industries
            </Text>

            <View className="bg-emerald-100 p-4 rounded-xl mt-8 ">
              <Image source={require('../../assets/images/servers.jpg')} className="w-[312px] h-[500px] rounded-lg mb-12" />
              <Text className="font-semiBold text-xl">Cloud Consulting</Text>
              <Text className="font-regular text-stone-600 text-lg my-4">We assess your business computing needs to determine if cloud computing is the right fit and recommend an approach to maximize cloud technology benefits.</Text>
              <Text className="font-semiBold text-lg my-4 text-center underline">Learn More</Text>
            </View>

            <View className="bg-emerald-100 p-4 rounded-xl my-4">
              <Image source={require('../../assets/images/hacking.jpg')} className="w-[312px] h-[500px] rounded-lg mb-12" />
              <Text className="font-semiBold text-xl">Cyber Security Services</Text>
              <Text className="font-regular text-stone-600 text-lg my-4">Simplify cybersecurity with us! We provide expert-managed security and tailored professional services to protect your business.  </Text>
              <Text className="font-semiBold text-lg my-4 text-center underline">Learn More</Text>
            </View>
          </View>

          <View className="bg-emerald-100 p-4 rounded-xl">
            <Image source={require('../../assets/images/hard-disk.jpg')} className="w-[312px] h-[500px] rounded-lg mb-12" />
            <Text className="font-semiBold text-xl">Data Recovery</Text>
            <Text className="font-regular text-stone-600 text-lg my-4">Protecting your data is key to business continuity. We provide tailored solutions to safeguard your irreplaceable data, taking the time to understand your unique needs.</Text>
            <Text className="font-semiBold text-lg my-4 text-center underline">Learn More</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider >
  );
};

export default Onboarding;
