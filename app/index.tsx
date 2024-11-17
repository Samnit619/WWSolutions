import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-react";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn === undefined) {
    console.log("lol");
    return null;
  }

  if (isSignedIn) {
    console.log("hello");
    return <Redirect href={"/(tabs)/home"} />;
  }

  return <Redirect href={"/(auth)/welcome"} />;
};

export default Home;
