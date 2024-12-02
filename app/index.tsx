
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar'; // Correct import for Expo

const Home = () => {

  useEffect(() => {
    // Set the navigation bar color
    NavigationBar.setBackgroundColorAsync("white"); // Set the background color

    // Optionally, set the style for icons (dark/light)
    NavigationBar.setButtonStyleAsync("light"); // 'light' or 'dark' icons
  }, []);

  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(tabs)/home"} />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default Home;

