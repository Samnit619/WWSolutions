import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    // Basic form validation
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Handle form submission (you could send this to an API)
    Alert.alert('Success', 'Your message has been sent!');
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
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
        onPress={() => router.push('/')}
      >
        <Text className="text-blue-600 text-center">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
