// import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [video, setVideo] = useState(null);
//   const [thumbnail, setThumbnail] = useState(null);
//   const [aiPrompt, setAiPrompt] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleUploadVideo = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaType.VIDEO, 
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setVideo(result.assets[0].uri);
//     }
//   };

//   const handleUploadThumbnail = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaType.IMAGE,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setThumbnail(result.assets[0].uri);
//     }
//   };

//   const handleSubmit = () => {
//     alert(`Publishing Video: ${title}`);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#1e293b', paddingHorizontal: 16, paddingVertical: 24 }}>
//       <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 24, marginBottom: 40 }}>Upload Video</Text>

//       <Text style={{ color: 'white', marginBottom: 8, fontSize: 24, fontWeight: 'bold' }}>Video Title</Text>
//       <View style={{ backgroundColor: '#2d3748', borderRadius: 12, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.5 }}>
//         <TextInput
//           placeholder="Enter video title..."
//           placeholderTextColor="gray"
//           style={{ color: 'white', fontSize: 18 }}
//           value={title}
//           onChangeText={setTitle}
//         />
//       </View>

//       <Text style={{ color: 'white', marginBottom: 8, fontSize: 24, fontWeight: 'bold' }}>Upload Video</Text>
//       <TouchableOpacity 
//         style={{ backgroundColor: '#2d3748', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.5 }} 
//         onPress={handleUploadVideo}
//       >
//         <Ionicons name="cloud-upload-outline" size={24} color="white" style={{ marginRight: 8 }} />
//         <Text style={{ color: 'white', fontSize: 18 }}>Select Video</Text>
//       </TouchableOpacity>
//       {video && <Text style={{ color: '#38a169', textAlign: 'center', marginBottom: 8 }}>Video Uploaded Successfully!</Text>}

//       <Text style={{ color: 'white', marginBottom: 8, fontSize: 24, fontWeight: 'bold' }}>Upload Thumbnail</Text>
//       <TouchableOpacity 
//         style={{ backgroundColor: '#2d3748', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.5 }} 
//         onPress={handleUploadThumbnail}
//       >
//         <Ionicons name="image-outline" size={24} color="white" style={{ marginRight: 8 }} />
//         <Text style={{ color: 'white', fontSize: 18 }}>Select Thumbnail</Text>
//       </TouchableOpacity>
//       {thumbnail && <Image source={{ uri: thumbnail }} style={{ width: 96, height: 96, alignSelf: 'center', marginTop: 8, borderRadius: 8 }} />}

//       <Text style={{ color: 'white', marginBottom: 8, fontSize: 24, fontWeight: 'bold' }}>AI Prompt</Text>
//       <View style={{ backgroundColor: '#2d3748', borderRadius: 12, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.5 }}>
//         <TextInput
//           placeholder="Describe your video for AI..."
//           placeholderTextColor="gray"
//           style={{ color: 'white', fontSize: 18 }}
//           value={aiPrompt}
//           onChangeText={setAiPrompt}
//           multiline
//         />
//       </View>

//       {loading && <ActivityIndicator size="large" color="#FACC15" style={{ marginBottom: 16 }} />}

//       <TouchableOpacity 
//         style={{ backgroundColor: '#facc15', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.5 }} 
//         onPress={handleSubmit}
//       >
//         <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Submit & Publish</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default CreatePost;
