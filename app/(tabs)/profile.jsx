import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  const handleLogout = () => {
    console.log("Logged Out");
  };

  return (
    <ScrollView className={`p-5 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <View className="mt-10">
      {/* Avatar and basic info */}
      <View className="items-center mb-5">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          className="w-24 h-24 rounded-full mb-3"
        />
        <Text className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>John Doe</Text>
        <Text className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>john.doe@example.com</Text>
      </View>

      {/* Contact info */}
      <View className="mb-5">
        <Text className={`text-lg mb-3 ${isDarkMode ? "text-white" : "text-black"}`}>
          <MaterialIcons name="phone" size={20} color={isDarkMode ? "#FFD700" : "#000"} /> +123 456 7890
        </Text>
        <Text className={`text-lg mb-3 ${isDarkMode ? "text-white" : "text-black"}`}>
          <MaterialIcons name="location-on" size={20} color={isDarkMode ? "#FFD700" : "#000"} /> 123 Street, City
        </Text>
      </View>

      {/* Notifications & Dark Mode Section */}
      <View className="flex-col mb-5">
        <View className="flex-row justify-between items-center mb-4">
          <Text className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
            <MaterialIcons name="notifications" size={20} color={isDarkMode ? "#FFD700" : "#000"} /> Notifications
          </Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: "#767577", true: "#FFD700" }}
            thumbColor={isNotificationsEnabled ? "#FFD700" : "#f4f3f4"}
          />
        </View>

        <View className="flex-row justify-between items-center mb-4">
          <Text className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
            <MaterialIcons name="brightness-4" size={20} color={isDarkMode ? "#FFD700" : "#000"} /> Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "#767577", true: "#FFD700" }}
            thumbColor={isDarkMode ? "#FFD700" : "#f4f3f4"}
          />
        </View>
      </View>

      {/* Settings Button */}
      <TouchableOpacity className="flex-row mb-5 p-3 border border-gray-400 rounded-md items-center">
        <MaterialIcons name="settings" size={20} color={isDarkMode ? "#FFD700" : "#000"} />
        <Text className={`text-xl ml-3 ${isDarkMode ? "text-white" : "text-black"}`}>Settings</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity className="flex-row p-4 bg-red-500 rounded-md items-center" onPress={handleLogout}>
        <MaterialIcons name="logout" size={20} color="#fff" />
        <Text className="text-xl text-white ml-3">Logout</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
