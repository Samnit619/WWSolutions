import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#f8f9fa", // Light background color
            height: 65, // Height of the tab bar
            marginHorizontal: 7,
            marginBottom: 15,
            borderRadius: 25,
            overflow: "hidden",
            position: "absolute",
          },
          tabBarLabelStyle: {
            fontSize: 13, // Font size for the tab labels
            color: "#333", // Label color
            fontWeight: "bold",
            textAlign: "center",
          },
          tabBarItemStyle: {
            justifyContent: "center", // Center the label vertically
            alignItems: "center", // Center horizontally
          },
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="homePage"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                <Image
                  source={require("../../assets/images/TabBar/home.png")}
                  resizeMode="contain"
                  className="h-6 w-6"
                />
                {focused ? <Text className="font-medium ">Home</Text> : ""}
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                <Image
                  source={require("../../assets/images/TabBar/settings.png")}
                  resizeMode="contain"
                  className="h-6 w-6 "
                />
                {focused ? <Text className="font-medium">Settings</Text> : ""}
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                <Image
                  source={require("../../assets/images/TabBar/profile.png")}
                  resizeMode="contain"
                  className="h-6 w-6 "
                />
                {focused ? <Text className="font-medium">Profile</Text> : ""}
              </>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default HomeLayout;
