import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
          statusBarStyle: "dark",
        }}
      />
      <Stack.Screen name="auth" options={{ statusBarColor: "black" }} />
      <Stack.Screen
        name="index"
        options={{ headerShown: false, statusBarColor: "black" }}
      />
    </Stack>
  );
}
