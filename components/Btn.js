import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({
  bgColor,
  btnLabel,
  textColor,
  Press,
  borderColor,
  borderWidth,
  fontSize,
  fontWeight,
}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        paddingVertical: 5,
        marginVertical: 10,
        borderColor: borderColor,
        borderWidth: borderWidth,
        width: "100%",
      }}
    >
      <Text
        style={{ color: textColor, fontSize: fontSize, fontWeight: fontWeight }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
