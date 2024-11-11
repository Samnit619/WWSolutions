import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import InputField from "@/components/InputField";
import { useState } from "react";
import { Button, NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Link, useNavigation } from "expo-router";
import OAuth from "@/components/OAuth";
import { useRouter } from "expo-router";
import { useSignIn } from "@clerk/clerk-react";
import React from "react";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, form.email, form.password]);
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView className="flex-1 bg-white">
          <Button
            className="rounded-full w-7 bg-transparent p-4 "
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../assets/images/ItSolutions/arrow.png")}
              className="w-7 h-7"
            />
          </Button>
          <View className="flex-1 bg-white">
            <Text className="text-2xl text-black font-semibold pb-5 pl-5">
              Login to your Account
            </Text>

            <View className="p-5">
              <InputField
                label="Email"
                placeholder="Enter your Email"
                value={form.email}
                icon="mail-outline"
                onChangeText={(value: string) =>
                  setForm({
                    ...form,
                    email: value,
                  })
                }
              />
              <InputField
                label="Password"
                placeholder="Enter your Password"
                value={form.password}
                icon="lock-closed-outline"
                onChangeText={(value: string) =>
                  setForm({
                    ...form,
                    password: value,
                  })
                }
              />

              <CustomButton
                title="Log in"
                className="mt-6"
                onPress={onSignInPress}
              />

              <OAuth />

              <Link
                href="/sign-up"
                className="text-lg text-center text-general-200 mt-10"
              >
                <Text>Don't have an account? </Text>
                <Text className="text-primary-500">Sign up</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SignIn;
