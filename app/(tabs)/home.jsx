import { View, Text, TextInput, TouchableOpacity, Image, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const posts = [
  {
    id: '1',
    title: 'Learn React Native in 2024!',
    thumbnail: 'https://via.placeholder.com/150',
    video: 'https://example.com/video.mp4',
    creator: { username: 'John Doe', avatar: 'https://via.placeholder.com/50' }
  },
  {
    id: '2',
    title: 'Expo Router Tutorial',
    thumbnail: 'https://via.placeholder.com/150',
    video: 'https://example.com/video.mp4',
    creator: { username: 'Jane Smith', avatar: 'https://via.placeholder.com/50' }
  }
  ,
  {
    id: '3',
    title: 'Expo Router Tutorial',
    thumbnail: 'https://via.placeholder.com/150',
    video: 'https://example.com/video.mp4',
    creator: { username: 'Jane Smith', avatar: 'https://via.placeholder.com/50' }
  }
  ,
  {
    id: '4',
    title: 'Expo Router Tutorial',
    thumbnail: 'https://via.placeholder.com/150',
    video: 'https://example.com/video.mp4',
    creator: { username: 'Jane Smith', avatar: 'https://via.placeholder.com/50' }
  },
  {
    id: '5',
    title: 'Expo Router Tutorial',
    thumbnail: 'https://via.placeholder.com/150',
    video: 'https://example.com/video.mp4',
    creator: { username: 'Jane Smith', avatar: 'https://via.placeholder.com/50' }
  }

];

const avatar = { uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }; // Placeholder Avatar

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000); // Simulate data refresh
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-900 px-4">
     
      {/* Top Bar */}
      <View className="flex-row justify-between items-center py-4">
        <View className="flex-row items-center">
          <Image source={avatar} className="w-12 h-12 rounded-full border-2 border-white" />
          <Text className="text-2xl font-bold text-white ml-3">Abdullah</Text>
        </View>
        <TouchableOpacity className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <Text className="text-red-500 font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-800 rounded-lg p-3 mt-4">
        <TextInput
          placeholder="Search for a video topic..."
          placeholderTextColor="gray"
          className="flex-1 text-lg text-white"
        />
        <Ionicons name="search" size={20} color="gray" className="ml-3" />
      </View>

      {/* Latest Videos */}
      <Text className="text-lg text-gray-300 mt-6 mb-4">Latest Videos</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-gray-700 rounded-lg p-4 mb-4">
            <Image source={{ uri: item.thumbnail }} className="w-full h-40 rounded-lg" />
            <Text className="text-lg font-bold text-white mt-3">{item.title}</Text>
            <View className="flex-row items-center mt-2">
              <Image source={{ uri: item.creator.avatar }} className="w-6 h-6 rounded-full mr-2" />
              <Text className="text-gray-300">{item.creator.username}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text className="text-center text-gray-400 mt-6">No videos found.</Text>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;
