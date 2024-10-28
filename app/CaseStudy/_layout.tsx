import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const CaseStudyLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="caseStudy"
        options={{ title: "Case Study", headerShown: false }}
      />
    </Stack>
  );
};

export default CaseStudyLayout;
