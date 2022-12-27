import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Btn from "../components/Btn";
import { useNavigation } from "@react-navigation/native";

const InitialScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>CampUnity</Text>
      <View style={styles.buttonContainer}>
        <Btn
          bgColor={"#cc0000"}
          textColor="white"
          btnLabel="Login"
          fontSize={25}
          fontWeight={"bold"}
          Press={() => navigation.navigate("Login")}
          style={styles.button}
        />
        <Btn
          bgColor="white"
          textColor={"#cc0000"}
          btnLabel="Sign up"
          borderColor={"#cc0000"}
          borderWidth={2}
          fontSize={25}
          fontWeight={"bold"}
          Press={() => navigation.navigate("Register")}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "70%",
  },
});
