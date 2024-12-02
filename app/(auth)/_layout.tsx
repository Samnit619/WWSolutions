import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
    <GestureHandlerRootView>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" options={{ headerShown: false, statusBarStyle: "dark", }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false, statusBarStyle: "dark" }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false, statusBarStyle: "dark" }} />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default Layout;
