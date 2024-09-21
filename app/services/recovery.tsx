import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function RecoveryScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-900">Data Recovery Services</Text>
      <Text className="mt-2 text-gray-700">
        We offer expert data recovery solutions to retrieve your critical information.
      </Text>

      <Text className="mt-4 text-gray-800">
        Our services include:
      </Text>
      <View className="mt-2">
        <Text className="text-gray-600">• Hard Drive Recovery</Text>
        <Text className="text-gray-600">• RAID Recovery</Text>
        <Text className="text-gray-600">• Cloud Data Recovery</Text>
        <Text className="text-gray-600">• File and Database Recovery</Text>
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
