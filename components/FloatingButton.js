import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const FloatingButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons
          style={styles.floatingButton}
          name="add-circle-outline"
          size={60}
          color="#a80c0c"

          // color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 3,
    // opacity: 0.7,
    position: "absolute",
    top: 10,
    right: 10,
  },
});
