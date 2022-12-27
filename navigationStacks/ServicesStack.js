import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Services from "../components/screenComponents/Services";
import StoreProfile from "../components/screenComponents/StoreProfile";

const ServicesStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ServicesPage"}
        component={Services}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StoreProfile"
        component={StoreProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ServicesStack;
