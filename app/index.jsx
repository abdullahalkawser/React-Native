import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import logo from '../assets/images/logo.png';
import card from '../assets/images/cards.png';
import CustomButton from '@/components/CustomButton';

const App = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-slate-950 flex-1">

      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="w-full items-center p-5">
          {/* Logo */}
          <Image source={logo} className="w-[130px] h-[85px] mb-4" resizeMode="contain" />

          {/* Card Image */}
          <Image source={card} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />

          {/* Title */}
          <Text className="text-white text-center text-3xl font-bold m-5">
            If having trouble with the expo initialization time of Started
          </Text>

          {/* Description */}
          <Text className="text-gray-400 text-center text-xl m-5">
            If you're having trouble with the expo initialization time of Started, so which one?
          </Text>

          {/* Button */}
          <TouchableOpacity className="w-11/12">
            <CustomButton title="Continue With Email" onPress={() => router.push('/(tabs)/home')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
