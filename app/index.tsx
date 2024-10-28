import { Redirect } from "expo-router"
import { useAuth } from "@clerk/clerk-react"

const Home = () => {

  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(root)/(tabs)/home'} />
  }

  const redirect: string = "/(auth)/welcome"
  return <Redirect href={redirect} />;
}
export default Home
