import CustomButton from "@/components/CustomButton";
import ExpoImage from "@/components/ExpoImage";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function OnBoarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  function handleButtonPress() {
    if (isLastSlide) {
      router.replace("/(auth)/sign-up");
    } else {
      swiperRef.current?.scrollBy(1);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex items-end m-6">
        <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
          <Text className="text-base font-bold font-JakartaBold">Skip</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View className="w-8 h-1 mx-1 bg-gray-500" />}
          activeDot={<View className="w-8 h-1 mx-1 bg-gray-900" />}
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboarding.map((img) => (
            <View key={img.id}>
              <ExpoImage uri={img.image} height={300} width={350} />
              <View className="max-w-xs mx-auto leading-tight space-y-4 mt-4">
                <Text className="text-2xl text-center font-JakartaBold text-slate-700">
                  {img.title}
                </Text>
                <Text className="text-base text-center font-JakartaMedium">
                  {img.description}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>
      </View>
      <View className="flex items-center justify-center py-3">
        <CustomButton
          label={isLastSlide ? "Get Started" : "Next"}
          onPress={handleButtonPress}
        />
      </View>
    </SafeAreaView>
  );
}
