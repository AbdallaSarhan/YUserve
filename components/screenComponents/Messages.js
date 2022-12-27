import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Header";
import ChatList from "../ChatList";
const ChatScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Messages</Text>
      </View>
      <View>
        <ChatList />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    // marginTop: ,
    backgroundColor: "#cc0000",
  },
  headerText: {
    fontSize: "22",
    fontWeight: "bold",
    marginTop: 20,
    color: "#f2f2f2",
  },
});
