
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind";
 

const SafeAreaView = styled(RNSafeAreaView)
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-7xl font-sans-extrabold text-primary">Home</Text>

      <Text className="text-7xl font-bold text-primary">Home</Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go to Sign-in</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Go to Sign-up</Link>
      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4">Go to Spotify Subscription</Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" }
      }} className="mt-4 rounded bg-primary text-white p-4">Go to Claude Subscription</Link>



    </SafeAreaView>
  );
}