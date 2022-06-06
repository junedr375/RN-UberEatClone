import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import MenuItems from "../components/resturantDetail/MenuItems";

export default function OrderCompleted() {
  const { items, resturantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
      ></LottieView>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          padding: 30,
          textAlign: "center",
        }}
      >
        Your Order is Completed with {resturantName} and will be delivered soon
      </Text>
      <MenuItems foods={items} hideCheckBox={true} marginLeft={20}></MenuItems>
      <LottieView
        style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        loop
        speed={0.8}
      ></LottieView>
    </SafeAreaView>
  );
}
