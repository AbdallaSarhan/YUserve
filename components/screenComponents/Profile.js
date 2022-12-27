import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/core";
import { auth } from "../../firebase";
import Btn from "../Btn";
import FinalMe from "../../assets/FinalMe.png";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const navigation = useNavigation();
  const { handleSignOut } = useAuth();

  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={FinalMe} />
      <TextInput
        style={{
          padding: 15,
          backgroundColor: "white",
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "#cc0000",
          margin: 10,
          marginTop: 20,
          width: "60%",
        }}
      >
        {auth.currentUser?.email}
      </TextInput>
      <TextInput
        style={{
          padding: 15,
          backgroundColor: "white",
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "#cc0000",
          margin: 10,
          width: "60%",
        }}
      >
        {auth.currentUser?.email}
      </TextInput>
      <TextInput
        style={{
          padding: 15,
          backgroundColor: "white",
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "#cc0000",
          margin: 10,
          width: "60%",
        }}
      >
        Username
      </TextInput>
      <TextInput
        style={{
          padding: 15,
          backgroundColor: "white",
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "#cc0000",
          margin: 10,
          width: "60%",
        }}
        secureTextEntry
      >
        Password
      </TextInput>
      <View style={styles.buttonContainer}>
        <Btn
          bgColor="white"
          textColor={"#cc0000"}
          btnLabel="Edit Profile"
          fontSize={15}
          fontWeight={"bold"}
          Press={() => navigation.navigate("Register")}
          borderColor={"red"}
          borderWidth={2}
        />
        <Btn
          bgColor="#cc0000"
          textColor={"white"}
          btnLabel="Logout"
          fontSize={15}
          fontWeight={"bold"}
          Press={handleSignOut}
          borderColor={"red"}
          borderWidth={2}
        />
        {/* <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: "75",
  },
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    width: "30%",
  },
  button: {
    backgroundColor: "#cc0000",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
