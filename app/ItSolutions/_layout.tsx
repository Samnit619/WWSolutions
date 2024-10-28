import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ITLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="itSolutions"
        options={{ statusBarStyle: "dark", headerShown: false }}
      />
    </Stack>
  );
};

export default ITLayout;
