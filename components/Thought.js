import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FinalMe from "../assets/FinalMe.png";
import PlusButton from "./PlusButton";

const Thought = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.profileImage} source={FinalMe} />
        <Text style={{ color: "grey" }}>Abdallaxx</Text>
        <Text style={{ color: "grey", marginLeft: 30 }}>1 Min Ago</Text>
      </View>
      <Text style={{ marginTop: 20 }}>
        I feel like york needs some new toilet paper and I can go on and on and
        on about what the falafal, I think this is looking pretty good nwo.
      </Text>
    </View>
  );
};

export default Thought;

const styles = StyleSheet.create({
  container: {
    // borderRadius: 60,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "flex-start",
    // alignItems: "center",
    flexDirection: "column",
    margin: 20,
    padding: 20,
    shadowColor: "#cc0000",
    shadowOpacity: 0.6,
    backgroundColor: "#FFF",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: "25",
    marginHorizontal: 10,
  },
});
