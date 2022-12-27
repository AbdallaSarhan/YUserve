import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AppStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { user } = useAuth();
  console.log(user);
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
      options={{ headerShown: false }}
      name="Initial"
      component={InitialScreen}
    /> */}
      {user ? (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
        </>
      )}

      {/* <Stack.Screen
    options={{ headerShown: false }}
    name="StoreProfile"
    component={StoreProfile}
  /> */}
      {/* <Stack.Screen
    options={{ headerShown: false }}
    name="ChatScreen"
    component={ChatScreen}
  /> */}
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
