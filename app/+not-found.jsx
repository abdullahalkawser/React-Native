import { View, Text, TouchableOpacity } from "react-native";

export default function NoFound() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-gray-800">404</Text>
      <Text className="text-lg text-gray-600 mt-2">Page Not Found</Text>
      <TouchableOpacity className="mt-4 bg-blue-500 px-4 py-2 rounded-full">
        <Text className="text-white text-lg">Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}
