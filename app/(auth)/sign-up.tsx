import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomeInput";
import { images } from "@/constants";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="flex-1 relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-center text-slate-800 font-JakartaSemiBold absolute bottom-5 left-5">
            Create your account
          </Text>
        </View>
        <View className="px-6">
          <CustomInput label="Full Name" error="Name is required" />
          <CustomInput label="Email Address" />
          <CustomInput label="Password" isSecure={true} />
          <View className="mt-3">
            <CustomButton
              label="Create New User"
              onPress={() => console.log("")}
            />
            <Link
              href={"/(auth)/sign-in"}
              className="flex gap-2 text-slate-700"
            >
              <Text className="font-JakartaExtraLight">
                Do you have an account?
              </Text>
              <Text className="text-blue-500 underline font-JakartaSemiBold">
                Login
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
