import { View, Text } from "react-native";
import React from "react";

export default function OrderItem({ item }) {
  const { menuname, description } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomColor: "#999",
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{menuname}</Text>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>
        ${description.length}
      </Text>
    </View>
  );
}
