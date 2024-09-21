import { Stack } from "expo-router";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, statusBarColor: "black" }}
      />
      <Stack.Screen name="auth" options={{ statusBarColor: "black" }} />
    </Stack>
  );
}
