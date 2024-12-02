import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const { user } = useUser();

  let profileUrl = user?.hasImage
    ? { uri: user.imageUrl }
    : require("../../assets/images/samnit123.jpg");

  const [loaded, error] = useFonts({
    "AirbnbCereal-Black": require("../../assets/fonts/AirbnbCereal-Black.otf"),
    "AirbnbCereal-Bold": require("../../assets/fonts/AirbnbCereal-Bold.otf"),
    "AirbnbCereal-ExtraBold": require("../../assets/fonts/AirbnbCereal-ExtraBold.otf"),
    "AirbnbCereal-Light": require("../../assets/fonts/AirbnbCereal-Light.otf"),
    "AirbnbCereal-Regular": require("../../assets/fonts/AirbnbCereal-Regular.otf"),
    "AirbnbCereal-SemiBold": require("../../assets/fonts/AirbnbCereal-SemiBold.otf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-white h-full">
        <ScrollView
          className="p-6"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="mt-8 flex flex-row items-center justify-between">
            <Text className="text-4xl pt-1 font-semiBold">Profile</Text>
            <TouchableOpacity className="bg-emerald-150 p-2 rounded-xl"
              onPress={() => { router.push("/(pages)/notification") }}
            >
              <Ionicons name="notifications-outline" size={28} />
            </TouchableOpacity>

          </View>

          <View className="flex flex-row items-center justify-start mt-6">
            <Image
              source={profileUrl}
              className="h-16 w-16 rounded-full mt-5 mb-3"
            />
            <View>
              <Text className="text-xl font-semiBold pl-4">{user?.firstName}</Text>
              <Text className="text-base pl-4 text-stone-600">Show Profile</Text>
            </View>
          </View>


          <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />

          <View>

            <Text className="mt-4 mb-8 text-lg font-semiBold">Settings</Text>
            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="person-circle-outline" size={28} />
                  <Text className="font-regular">Personal Information</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="shield-outline" size={28} />
                  <Text className="font-regular">Login & Security</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="wallet-outline" size={28} />
                  <Text className="font-regular">Payments and Payouts</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="accessibility-outline" size={28} />
                  <Text className="font-regular">Accessibility</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="document-outline" size={28} />
                  <Text className="font-regular">Taxes</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="language-outline" size={28} />
                  <Text className="font-regular">Translation</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="notifications-outline" size={28} />
                  <Text className="font-regular">Notifications</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="lock-closed-outline" size={28} />
                  <Text className="font-regular">Privacy and Sharing</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

            <View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center justify-start gap-3">
                  <Ionicons name="briefcase-outline" size={28} />
                  <Text className="font-regular">Travel for Work</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={22} />
              </View>
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 16 }} />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Profile;

