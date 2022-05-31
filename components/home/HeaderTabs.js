import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs({ activeTab, setactiveTab }) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButtons
        text="Delivery"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
      <HeaderButtons
        text="Pickup"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
    </View>
  );
}

const HeaderButtons = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setactiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
