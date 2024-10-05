import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  label: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      className="px-4 py-2 text-black bg-sky-400 rounded-md shadow-lg"
      onPress={onPress}
    >
      <Text className="text-center text-white p-2 font-JakartaBold">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
