import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BottomTab from "../components/BottomTab";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BottomTab />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -5,
  },
});
