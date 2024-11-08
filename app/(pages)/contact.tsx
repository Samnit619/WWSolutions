import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Button, NativeBaseProvider } from "native-base";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const navigation = useNavigation();
  const handleSubmit = () => {
    // Basic form validation
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Handle form submission (you could send this to an API)
    Alert.alert("Success", "Your message has been sent!");
    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <NativeBaseProvider>
      <View className="flex-1 bg-white p-4">
        <Button
          className="rounded-full w-7 bg-transparent "
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/images/ItSolutions/arrow.png")}
            className="w-7 h-7"
          />
        </Button>
        <Text className="text-2xl font-bold text-gray-900">Contact Us</Text>
        <Text className="mt-2 text-gray-700">
          We’d love to hear from you! Please fill out the form below.
        </Text>

        <TextInput
          className="mt-4 p-2 border border-gray-300 rounded"
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="mt-4 p-2 border border-gray-300 rounded"
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="mt-4 p-2 border border-gray-300 rounded h-24"
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-lg mt-6"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center">Send Message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-4"
          onPress={() => router.push("/(tabs)/home")}
        >
          <Text className="text-blue-600 text-center">Back to Home</Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
}
