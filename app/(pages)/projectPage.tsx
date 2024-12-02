import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const ProjectPage = () => {
  const steps = [
    { title: "Understanding the Problem", hours: "8 hr" },
    { title: "Assessment & Analysis", hours: "5 hr" },
    { title: "Define the Problem", hours: "4 hr" },
    { title: "Research & Solution Design", hours: "6 hr" },
    { title: "Proposal & Recommendations", hours: "7 hr" },
    { title: "Implementation Planning", hours: "5 hr" },
    { title: "Solution Implementation", hours: "10 hr" },
    { title: "Testing & Quality Assurance", hours: "6 hr" },
    { title: "Training & Knowledge Transfer", hours: "4 hr" },
    { title: "Go-Live & Monitoring", hours: "8 hr" },
    { title: "Post-Implementation Support", hours: "5 hr" },
    { title: "Evaluation & Reporting", hours: "3 hr" },
    { title: "Continuous Improvement", hours: "6 hr" },
  ];
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-white h-full">
        <ScrollView
          className="p-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="mt-2 ">
            <Text className="font-semiBold text-xl text-center">
              Project Details
            </Text>

            <View className="mt-12">
              <Text className="font-Bold text-xl">IT Consulting</Text>
              <Text className="text-base font-regular mt-4">Get expert advice to enhance you IT stratergy.</Text>
              <View className="flex flex-row items-center justify-between mt-8">
                <View>
                  <Text className="font-regular">Assigned To:</Text>
                  <Text className="font-semiBold text-base">Jane Cooper</Text>
                </View>
                <View>
                  <Text className="font-regular">Date Started:</Text>
                  <Text className="font-semiBold text-base">December 01</Text>
                </View>
              </View>
            </View>

            <View className="p-8">
              {steps.map((step, index) => (
                <View
                  key={index}
                  className="border-stone-300 rounded-3xl border mt-8 p-8"
                >
                  <Text className="text-xl font-semiBold">{step.title}</Text>
                  <View className="flex flex-row gap-1 items-center mt-4">
                    <Ionicons name="flag-outline" size={28} color={"#78716c"} />
                    <Text className="text-stone-500 text-base">{step.hours}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default ProjectPage;
