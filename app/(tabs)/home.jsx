import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const avatar = { uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }; // Cartoon avatar

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      {/* Top Bar with Avatar, Name, and Logout Button */}
      <View className="flex-row justify-between items-center bg-red-500 p-4 rounded-lg shadow-md">
        <View className="flex-row items-center">
          <Image source={avatar} className="w-12 h-12 rounded-full border-2 border-white" />
          <Text className="text-2xl font-bold text-white ml-3">Abdullah</Text>
        </View>
        <TouchableOpacity 

          className="bg-white px-4 py-2 rounded-lg shadow-sm"
        >
          <Text className="text-red-500 font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-white p-3 rounded-lg shadow-md mt-4">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search..."
          className="flex-1 ml-2 text-lg"
          placeholderTextColor="gray"
        />
      </View>

      {/* Content */}
      <View className="mt-6">
        <Text className="text-lg text-gray-600">Welcome to the Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
