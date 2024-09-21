
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function NetworkingScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-900">Networking Services</Text>
      <Text className="mt-2 text-gray-700">
        We provide comprehensive networking solutions tailored to your business needs.
      </Text>

      <Text className="mt-4 text-gray-800">
        Our services include:
      </Text>
      <View className="mt-2">
        <Text className="text-gray-600">• Network Design and Implementation</Text>
        <Text className="text-gray-600">• Security Solutions</Text>
        <Text className="text-gray-600">• Maintenance and Support</Text>
        <Text className="text-gray-600">• Cloud Networking</Text>
      </View>

      {/* Contact Us Button */}
      <TouchableOpacity
        className="bg-blue-600 p-4 rounded-lg mt-6"
        onPress={() => router.push('/contact')}
      >
        <Text className="text-white text-center">Contact Us for a Consultation</Text>
      </TouchableOpacity>
    </View>
  );
}
