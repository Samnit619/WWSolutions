import React from "react";
import { Stack } from "expo-router";

const CaseStudyLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="caseStudy"
        options={{ title: "Case Study", headerShown: false }}
      />
      <Stack.Screen
        name="itSolutions"
        options={{ statusBarStyle: "dark", headerShown: false }}
      />
      <Stack.Screen
        name="company"
        options={{ statusBarStyle: "dark", headerShown: false }}
      />
      <Stack.Screen
        name="contact"
        options={{ statusBarStyle: "dark", headerShown: false }}
      />
      <Stack.Screen
        name="projectPage"
        options={{ statusBarStyle: "dark", headerShown: false }}
      />
      <Stack.Screen
        name="services/[id]"
        options={{ statusBarStyle: "dark", headerShown: false }}
      />
      <Stack.Screen
        name="aboutUs"
        options={{ statusBarStyle: "dark", headerShown: false }}
      />
    </Stack>
  );
};

export default CaseStudyLayout;
