import { styled } from "nativewind";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

// Define the type for the props
interface CustomInputProps extends TextInputProps {
  label?: string; // Optional label for the input
  error?: string; // Optional error message
  isSecure?: boolean; // Additional Tailwind classes
}

const CustomTextInput = styled(TextInput);

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  isSecure,
  ...rest
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          {label && (
            <Text className="text-lg font-medium text-gray-700 mb-2  font-JakartaSemiBold">
              {label}
            </Text>
          )}
          <View
            className={`p-3 rounded-lg bg-white border-slate-400 border-2 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          >
            <CustomTextInput
              className="w-full"
              secureTextEntry={isSecure}
              {...rest}
            />
          </View>
          {error && (
            <Text className="text-red-500 text-sm mt-1 font-JakartaSemiBold">
              {error}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomInput;
