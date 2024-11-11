import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-react";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn === undefined) {
    return null; // or a loading indicator if needed
  }

  if (isSignedIn) {
    console.log("hello");
    return <Redirect href={"/(tabs)/home"} />;
  } else {
    console.log("not hello");
    return <Redirect href={"/(auth)/welcome"} />;
  }
};

export default Home;
