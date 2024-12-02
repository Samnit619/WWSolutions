
import { View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  const TabIcon = ({
    source,
    focused,
  }: {
    source: any;
    focused: boolean;
  }) => (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""
        }`}
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-general-400" : ""
          }`}
      >
        <Ionicons name={source} size={26} />
      </View>
    </View>
  );

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            height: 64,
            marginHorizontal: 0,
            marginBottom: 0,
            paddingBottom: 20,
            paddingTop: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={"home-outline"} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="projects"
          options={{
            title: "Projects",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={"clipboard-outline"} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: "Browse",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={"grid-outline"} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={"person-outline"} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;

