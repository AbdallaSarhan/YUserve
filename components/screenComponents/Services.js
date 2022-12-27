import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import Service from "../Service";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Services = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: "25", fontWeight: "bold" }}>Services</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Post")}>
          <Ionicons name="add-circle" size={45} color="#cc0000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({});
