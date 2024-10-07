import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#f8f9fa", // Light background color
            borderTopColor: "#ccc", // Border color
            height: 60, // Height of the tab bar
          },
          tabBarLabelStyle: {
            fontSize: 14, // Font size for the tab labels
            color: "#333", // Label color
            fontWeight: "bold",
            textAlign: "center",
          },
          tabBarItemStyle: {
            justifyContent: "center", // Center the label vertically
            alignItems: "center", // Center horizontally
          },
          tabBarActiveBackgroundColor: "#e3e3e3",
          tabBarIconStyle: {
            display: "none",
          },
        }}
      >
        <Tabs.Screen
          name="homePage"
          options={{ title: "Home", headerShown: false }}
        />
        <Tabs.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }}
        />
      </Tabs>
    </>
  );
};

export default HomeLayout;
