import { Alert, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import InputField from "@/components/InputField";
import { useState } from "react";
import { Button, NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Link, useNavigation, useRouter } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-react";
import ReactNativeModal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { fetchAPI } from "@/lib/fetch";

const SignUp = () => {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    code: "",
    error: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({
        ...verification,
        state: "pending",
      });
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        await fetchAPI("/(api)/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          }),
        });

        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({
          ...verification,
          state: "success",
          error: "Verification failed",
        });
        router.replace("/");
      } else {
        setVerification({ ...verification, state: "failed" });
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        state: "failed",
        error: err.errors[0].longMessage,
      });
    }
  };
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
              Create Your Account
            </Text>

            <View className="p-5">
              <InputField
                label="Name"
                placeholder="Enter your name"
                value={form.name}
                icon="person-outline"
                onChangeText={(value: string) =>
                  setForm({
                    ...form,
                    name: value,
                  })
                }
              />
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
                title="Sign Up"
                className="mt-6"
                onPress={onSignUpPress}
              />

              <OAuth />

              <Link
                href="/sign-in"
                className="text-lg text-center text-general-200 mt-10"
              >
                <Text>Already have an account? </Text>
                <Text className="text-primary-500">Log In</Text>
              </Link>

              <ReactNativeModal
                isVisible={verification.state === "pending"}
                // onBackdropPress={() =>
                //   setVerification({ ...verification, state: "default" })
                // }
                onModalHide={() => {
                  if (verification.state === "success") {
                    setShowSuccessModal(true);
                  }
                }}
              >
                <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                  <Text className="font-JakartaExtraBold text-2xl mb-2">
                    Verification
                  </Text>
                  <Text className="font-Jakarta mb-5">
                    We've sent a verification code to {form.email}.
                  </Text>
                  <InputField
                    label={"Code"}
                    placeholder={"12345"}
                    value={verification.code}
                    keyboardType="numeric"
                    onChangeText={(code) =>
                      setVerification({ ...verification, code })
                    }
                  />
                  {verification.error && (
                    <Text className="text-red-500 text-sm mt-1">
                      {verification.error}
                    </Text>
                  )}
                  <CustomButton
                    title="Verify Email"
                    onPress={onPressVerify}
                    className="mt-5 bg-success-500"
                  />
                </View>
              </ReactNativeModal>
              <ReactNativeModal isVisible={showSuccessModal}>
                <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                  <Ionicons name="checkmark-circle" />
                  <Text className="text-3xl font-JakartaBold text-center">
                    Verified
                  </Text>
                  <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
                    You have successfully verified your account.
                  </Text>
                  <CustomButton
                    title="Browse Home"
                    onPress={() => router.push(`/(root)/(tabs)/home`)}
                    className="mt-5"
                  />
                </View>
              </ReactNativeModal>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SignUp;
