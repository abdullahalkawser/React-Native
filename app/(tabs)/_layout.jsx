import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#FFD700", // Active color (Gold Yellow)
        tabBarInactiveTintColor: "#B0BEC5", // Inactive color (Gray)
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "600",
          textAlign: "center",
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: "#1E293B", // Dark background (Slate Black)
          borderRadius: 25,
          paddingBottom: 8,
          paddingTop: 8,
          marginHorizontal: 20,
          marginBottom: 16,
          height: 64, // Medium size tab bar
          position: "absolute",
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bookmark" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Upload",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View>
              <MaterialIcons name="add" size={size}  color={color} /> {/* White icon color for better contrast */}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
