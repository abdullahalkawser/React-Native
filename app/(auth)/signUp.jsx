import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';

const SignUp = () => {
  const router = useRouter();

  // State variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form validation function
  const validateForm = () => {
    if (!name.trim()) return "Name is required!";
    if (!email.includes("@") || !email.includes(".")) return "Enter a valid email!";
    if (password.length < 6) return "Password must be at least 6 characters!";
    return null;
  };

  // Handle SignUp
  const handleSignUp = async () => {
    setError('');
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      // Simulating API call (Replace this with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("Sign Up Successful!");
      router.push('/home'); // Navigate to Home page
    } catch (err) {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className='flex-1 bg-slate-900 p-5' >
      <View className="mt-28">
             <Image source={logo} className="w-[130px] h-[85px] mb-4" resizeMode="contain" />
      
      <Text className="text-white text-3xl font-bold text-center mb-8">Sign Up</Text>

      {error ? <Text className="text-red-500 text-center mb-4">{error}</Text> : null}

      {/* Name Input */}
      <View className="flex-row items-center bg-gray-800 rounded-lg p-4 mb-4">
        <FontAwesome name="user" size={20} color="white" className="mr-3" />
        <TextInput 
          placeholder="Full Name"
          placeholderTextColor="gray"
          className="text-white flex-1"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View className="flex-row items-center bg-gray-800 rounded-lg p-4 mb-4">
        <MaterialIcons name="email" size={20} color="white" className="mr-3" />
        <TextInput 
          placeholder="Email Address"
          placeholderTextColor="gray"
          keyboardType="email-address"
          className="text-white flex-1"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View className="flex-row items-center bg-gray-800 rounded-lg p-4 mb-6">
        <FontAwesome name="lock" size={20} color="white" className="mr-3" />
        <TextInput 
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={!showPassword}
          className="text-white flex-1"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity 
        className="bg-yellow-500 p-4 rounded-lg flex-row justify-center items-center"
        onPress={handleSignUp}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="black" /> : 
          <Text className="text-center text-black text-lg font-bold">Sign Up</Text>
        }
      </TouchableOpacity>

      <View className="flex-row justify-center mt-4">
        <Text className="text-white text-xl">Do have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/signin')}>
          <Text className="text-yellow-500 ml-2 text-xl">Login</Text>
        </TouchableOpacity>
      </View>

      </View>

    </SafeAreaView>
  );
};

export default SignUp;
