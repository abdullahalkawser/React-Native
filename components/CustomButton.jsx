import { View, Text, TouchableOpacity } from 'react-native';


const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
      className="bg-yellow-500 py-3 rounded-lg shadow-lg hover:opacity-80 active:opacity-60"
      onPress={onPress}
    >
      <Text className="text-white text-lg font-bold text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
