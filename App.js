import "react-native-reanimated";
import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Components/HomeScreen";
import CompAScreen from "./Components/CompAScreen";
import CompBScreen from "./Components/CompBScreen";
import CompCScreen from "./Components/CompCScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#328463" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#328463",
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{title: "Home",tabBarIcon: ({ color, size }) => (<Entypo name="home" size={size} color={color} />),}}/>
      <Tab.Screen name="Screen A" component={CompAScreen} options={{title: "Screen A",tabBarIcon: ({ color, size }) => (<Entypo name="plus" size={size} color={color} />),}}/>
      <Tab.Screen name="Screen B" component={CompBScreen} options={{title: "Screen B",tabBarIcon: ({ color, size }) => (<Entypo name="user" size={size} color={color} />),}}/>
      <Tab.Screen name="Screen C" component={CompCScreen} options={{title: "Screen C",tabBarIcon: ({ color, size }) => (<Entypo name="cog" size={size} color={color} />),}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
