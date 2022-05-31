import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BotomTabs() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon
        icon="home"
        text="Home"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></Icon>
      <Icon
        icon="search"
        text="Browse"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></Icon>
      <Icon
        icon="shopping-bag"
        text="Grocery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></Icon>
      <Icon
        icon="receipt"
        text="Orders"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></Icon>
      <Icon
        icon="user"
        text="Account"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></Icon>
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity onPress={() => props.setActiveTab(props.text)}>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        color={props.activeTab == props.text ? "#000" : "grey"}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
