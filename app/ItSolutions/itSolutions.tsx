import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { AlertDialog, Button, ScrollView } from "native-base";
import { NativeBaseProvider } from "native-base";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const itSolutions = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState("");
  const CardOpen = (prop: any) => {
    setIsOpen(prop);
  };

  const cancelRef = useRef(null);
  return (
    <NativeBaseProvider>
      <ScrollView className="h-screen p-4 bg-white">
        <Button
          className="rounded-full w-7 bg-transparent "
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/images/ItSolutions/arrow.png")}
            className="w-7 h-7"
          />
        </Button>
        <Text className="text-3xl font-medium text-green-500 mt-3">
          OUR SERVICES
        </Text>
        <Text className="text-sm text-[#3e3e3e] font-medium">
          Establish your Business Presence
        </Text>
        <View className="flex-col gap-2 mt-5 mb-7">
          <Button className="py-8 rounded-2xl " onPress={() => CardOpen("IT1")}>
            <Text className="text-lg text-white font-medium ">
              Cloud Consulting and Implementation
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT2")}>
            <Text className="text-lg text-white font-medium">
              Cyber Security Products & Services
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT3")}>
            <Text className="text-lg text-white font-medium">
              Data Recovery and Data Migration
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT4")}>
            <Text className="text-lg text-white font-medium">
              Communication Systems
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT5")}>
            <Text className="text-lg text-white font-medium">
              IT Hardware Solutions
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT6")}>
            <Text className="text-lg text-white font-medium">
              Virtual CIO/CTO Service
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT7")}>
            <Text className="text-lg text-white font-medium">
              IP Mobile & Virtual Telephony
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT8")}>
            <Text className="text-lg text-white font-medium">
              Payment, Accounting and Web Solutions
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT9")}>
            <Text className="text-lg text-white font-medium">
              Network Assessment
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT10")}>
            <Text className="text-lg text-white font-medium">
              Software Development Solutions
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT11")}>
            <Text className="text-lg text-white font-medium">
              IT Financing Options
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT12")}>
            <Text className="text-lg text-white font-medium">
              Project Management Services
            </Text>
          </Button>
          <Button className="py-8 rounded-2xl" onPress={() => CardOpen("IT13")}>
            <Text className="text-lg text-white font-medium">
              Training Services
            </Text>
          </Button>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT1" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Cloud Consulting and Implementation
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                We analyze your current business computing environment and
                determine if cloud computing is the right solution for your
                business. Our suggested cloud computing approach can help you
                make the most of current cloud technology.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT2" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Cyber Security Products & Services
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                Cybersecurity Is Complicated. Let us do it for you! We have
                expertise in comprehensive security services including Managed
                Security supported by our customized Professional Services.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT3" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Data Recovery and Data Migration
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                Business data protection is the heart of all business continuity
                strategies. We have the expertise and solutions available to
                suit your business needs. We know how awful the thought of
                losing your irreplaceable business data can be, that the reason
                why we take the time to know your unique story and business
                requirements.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT4" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Communication Systems
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                Designing Communication Systems for Government & Corporate
                Offices, Education, Healthcare & all Businesses, all Industries.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT5" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  IT Hardware Solutions
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                Are you looking for hardware solution provider, a second opinion
                on what your current provider suggests or advice what-to-buy or
                not? If your answer is yes, we can help you.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT6" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Virtual CIO/CTO Service
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                We provide responsive, professional IT support and technology
                services for your business, performing regular ongoing
                maintenance, monitoring, and data backups.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT7" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  IP Mobile & Virtual Telephony
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                Communicate and collaborate your way, on any device. Cloud phone
                system, team collaboration, video conferencing, contact Center,
                online Fax.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT8" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Payment, Accounting and Web Solutions
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                We partnered with the best providers based their reliability,
                customer service, calling features, user reviews, and pricing.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT9" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Network Assessment
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                A network assessment reviews your existing structure, and
                comprehensively assesses the organization’s productivity,
                performance, management, security, and processes, helping to
                determine what solutions best yield greater efficiency and
                functionality of the infrastructure and overall network.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT10" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Software Development Solutions
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                We Provide On-Demand Development of Specialized Software to Help
                Improve Your Business.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT11" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  IT Financing Options
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                A traditional lease option for procuring technology solutions.
                Connect with us to learn more about lease options programs.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT12" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">
                  Project Management Services
                </Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                We help businesses that do not have their own project managers,
                augment existing project managers’ abilities, lack project
                management capacity or simply wish to have a consultation with
                an expert.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen == "IT13" ? true : false}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton onPress={() => CardOpen("")} />
              <AlertDialog.Header>
                <Text className="text-sm font-semibold">Training Services</Text>
              </AlertDialog.Header>
              <AlertDialog.Body>
                With decades of industry expertise, an obsession with customer
                success, and a holistic Talent Experience Platform, we’re here
                to help you unleash the limitless potential of your workforce
                and streamline how you do it.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group>
                  <Button
                    className="bg-green-500 py-1"
                    colorScheme="coolGray"
                    onPress={() => CardOpen("")}
                    ref={cancelRef}
                  >
                    <View className="flex-row items-center justify-center gap-1">
                      <Text className="text-white font-medium">Read More</Text>
                      <Text className=" text-white font-medium text-2xl pb-2">
                        &#8594;
                      </Text>
                    </View>
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </View>
      </ScrollView>
      <View className="absolute bottom-7 w-full items-end right-8">
        <TouchableOpacity
          className="bg-[#ffffff] p-4 rounded-full items-center shadow-lg shadow-black"
          onPress={() => router.push("/contact")}
        >
          <Image
            source={require("../../assets/images/ItSolutions/customer.png")}
            className="h-10 w-10"
          />
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
};

export default itSolutions;
