
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function DevelopmentScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-900">Software Development Services</Text>
      <Text className="mt-2 text-gray-700">
        Our team specializes in creating custom software solutions tailored to your business needs.
      </Text>

      <Text className="mt-4 text-gray-800">
        Our services include:
      </Text>
      <View className="mt-2">
        <Text className="text-gray-600">• Mobile App Development</Text>
        <Text className="text-gray-600">• Web Application Development</Text>
        <Text className="text-gray-600">• API Development and Integration</Text>
        <Text className="text-gray-600">• Software Maintenance and Support</Text>
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
