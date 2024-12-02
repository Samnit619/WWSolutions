
import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

const serviceDetails = {
  "1": {
    name: "Cloud Migration",
    description: "Seamlessly migrate to the cloud.",
    longDescription: "We analyze your current business computing environment and determine if cloud computing is the right solution for your business. Our suggested cloud computing approach can help you make the most of current cloud technology."
  },
  "2": {
    name: "Network Setup",
    description: "Secure and efficient network setup.",
    longDescription: "We provide tailored network setups for businesses of all sizes, ensuring optimal security and performance."
  },
  "3": {
    name: "Software Development",
    description: "Custom software solutions.",
    longDescription: "We offer on-demand software development tailored to your business needs, enabling better operational efficiency and growth."
  },
  "4": {
    name: "IT Consulting",
    description: "Optimize your IT strategy.",
    longDescription: "Our IT consulting services provide businesses with expert advice to align their technology with their business goals, improving productivity and decision-making."
  },
  "5": {
    name: "Data Recovery",
    description: "Recover lost or corrupted data.",
    longDescription: "We understand how valuable your data is. Our data recovery services ensure that your critical business data is never lost and can be restored quickly and securely."
  },
  "6": {
    name: "Cybersecurity Solutions",
    description: "Protect against digital threats.",
    longDescription: "Our comprehensive cybersecurity services, including Managed Security, ensure that your business stays protected against emerging threats with continuous monitoring and support."
  },
};

const ServiceDetails = () => {
  const { user, isSignedIn } = useUser(); // Check if the user is signed in
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Get the service id from URL
  const [loading, setLoading] = useState(false);

  // Retrieve the service details from the `serviceDetails` object based on the service ID
  const service = serviceDetails[id] || { name: "Unknown", description: "No details available.", longDescription: "No additional information available." };

  const handlePurchaseService = async () => {
    if (!isSignedIn) {
      // If user is not signed in, show an alert and redirect to the sign-up page
      Alert.alert("Sign In Required", "Please sign in to purchase this service.");
      router.push("/sign-up"); // Adjust the path based on your routing setup
      return;
    }

    const clerkId = user.id; // Get the signed-in user's Clerk ID

    setLoading(true);
    try {
      // Make a POST request to purchase the service
      const response = await axios.post("http://192.168.68.56:5000/api/services", {
        userId: clerkId,
        serviceName: service.name,
        price: 99.99, // Adjust the price or get it dynamically
      });

      // Handle successful response
      if (response.status) {
        Alert.alert("Service Purchased", "Your service has been purchased successfully.");
        // Optionally navigate to a success page or update UI
      } else {
        Alert.alert("Purchase Failed", "There was an issue processing your purchase.");
      }
    } catch (error) {
      // Handle error
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <GestureHandlerRootView>
      <SafeAreaView className="h-full bg-white">
        <ScrollView
          className="p-8"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}

        >
          <View>
            <Text className="font-semiBold text-4xl mt-4">{service.name}</Text>
            <Text className="font-regular text-lg mt-4">{service.description}</Text>
            <Text className="font-regular text-base mt-4">{service.longDescription}</Text>

            <CustomButton
              title={loading ? "Processing..." : "Purchase Service"}
              onPress={handlePurchaseService}
              disabled={loading}
              bgVariant="primary" // You can adjust the bgVariant and textVariant as needed
              textVariant="default"
              className="mt-4"
            />
          </View >
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>

  );
};

export default ServiceDetails;

