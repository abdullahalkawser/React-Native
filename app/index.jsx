import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/images/logo.png'; // সঠিক ইমেজ ইম্পোর্ট
import card from '../assets/images/cards.png'; // সঠিক ইমেজ ইম্পোর্ট

const App = () => {
  return (
    <SafeAreaView className="bg-slate-950 h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>

        <View className=" w-full  ustify-center h-full items-center">
          <Image
            source={logo}
            className="w-[130px] h-[85px] mb-4"
            resizeMode="contain" // সঠিক প্রপার্টি 'resizeMode'
          />
                   <Image
            source={card}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
   <Text className="text-white text-center text-3xl font-bold m-5">
            If having trouble with the expo initialtis tim,e of Started
          </Text>

          <Text className="text-gray-400 text-center text-xl  m-5">
            If you're having trouble with the expo initialtis tim,e of StartedSo which one 
          </Text>
     
          <TouchableOpacity 
  className=" w-11/12 mt-6 bg-yellow-500 py-3 rounded-lg shadow-lg hover:opacity-80 active:opacity-60" 
  onPress={() => { console.log('Button Pressed'); }}
>
  <Text className="text-white text-lg font-semibold text-center">
    Get Started
  </Text>
</TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
