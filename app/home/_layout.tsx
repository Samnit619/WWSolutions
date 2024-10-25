import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Animated, { Easing, withTiming } from "react-native-reanimated";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Profile from "./profile";
import Settings from "./settings";
import HomeScreen from "./homePage";

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, itemSource, label }: any) => {
  const scale = useSharedValue(focused ? 1.05 : 1);
  React.useEffect(() => {
    scale.value = withTiming(focused ? 1.05 : 1, {
      duration: 300,
      easing: Easing.bounce,
    });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, [focused]);
  return (
    <View className="justify-center items-center">
      <Animated.View style={animatedStyle}>
        <Animated.Image
          source={itemSource}
          resizeMode="contain"
          style={[{ height: 24, width: 24 }, animatedStyle]}
        />
      </Animated.View>
      {focused ? <Text className="font-medium text-xs mt-1">{label}</Text> : ""}
    </View>
  );
};
const HomeLayout = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#f2f2f2", // Light background color
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
        <Tab.Screen
          name="homePage"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                itemSource={require("../../assets/images/TabBar/home.png")}
                label="Home"
              />
            ),
          }}
        />
        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ focused }: any) => (
              <TabIcon
                focused={focused}
                itemSource={require("../../assets/images/TabBar/settings.png")}
                label="Settings"
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                itemSource={require("../../assets/images/TabBar/profile.png")}
                label="Profile"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeLayout;
