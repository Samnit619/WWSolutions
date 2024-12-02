
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const services = [
  {
    id: "1",
    name: "Cloud Migration",
    description: "Seamlessly migrate to the cloud.",
    longDescription: "We analyze your current business computing environment and determine if cloud computing is the right solution for your business. Our suggested cloud computing approach can help you make the most of current cloud technology."
  },
  {
    id: "2",
    name: "Network Setup",
    description: "Secure and efficient network setup.",
    longDescription: "We provide tailored network setups for businesses of all sizes, ensuring optimal security and performance."
  },
  {
    id: "3",
    name: "Software Development",
    description: "Custom software solutions.",
    longDescription: "We offer on-demand software development tailored to your business needs, enabling better operational efficiency and growth."
  },
  {
    id: "4",
    name: "IT Consulting",
    description: "Optimize your IT strategy.",
    longDescription: "Our IT consulting services provide businesses with expert advice to align their technology with their business goals, improving productivity and decision-making."
  },
  {
    id: "5",
    name: "Data Recovery",
    description: "Recover lost or corrupted data.",
    longDescription: "We understand how valuable your data is. Our data recovery services ensure that your critical business data is never lost and can be restored quickly and securely."
  },
  {
    id: "6",
    name: "Cybersecurity Solutions",
    description: "Protect against digital threats.",
    longDescription: "Our comprehensive cybersecurity services, including Managed Security, ensure that your business stays protected against emerging threats with continuous monitoring and support."
  },
];

const ServicesScreen = () => {
  const router = useRouter();

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-white h-full">
        <ScrollView
          className="p-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex-1 p-4">
            <Text className="text-4xl pt-1 font-semiBold mb-4">Services</Text>
            {services.map((service) => (
              <TouchableOpacity
                key={service.id}
                onPress={() => router.push(`/services/${service.id}`)}
                className="bg-white p-4 rounded-2xl border border-stone-200 mb-4"
              >
                <Text className="text-xl font-semiBold">{service.name}</Text>
                <Text className="text-gray-600 font-regular text-base">{service.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default ServicesScreen;

