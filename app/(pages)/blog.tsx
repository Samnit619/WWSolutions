import { View, Text, Image } from "react-native";
import React from "react";
import { Button, NativeBaseProvider } from "native-base";
import { useNavigation } from "expo-router";

const BlogPost = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View>
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
          OUR COMPANY
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default BlogPost;
