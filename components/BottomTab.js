import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./screenComponents/Home";
import Profile from "./screenComponents/Profile";
import Post from "./screenComponents/Post";
import ChatScreen from "./screenComponents/Messages";
import ServicesStack from "../navigationStacks/ServicesStack";
import ChatStack from "../navigationStacks/ChatStack";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Services"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Market") {
            iconName = focused ? "pricetags" : "pricetags-outline";
          } else if (rn === "Profile") {
            iconName = focused ? "body" : "body-outline";
          } else if (rn === "Services") {
            iconName = focused ? "construct" : "construct-outline";
          } else if (rn === "Post") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (rn === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "grey",
        // tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        // tabBarStyle: { padding: 10, height: 100 },
      })}
    >
      <Tab.Screen
        name={"Services"}
        component={ServicesStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={"Market"}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={"Post"}
        component={Post}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={"Chat"}
        component={ChatStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
