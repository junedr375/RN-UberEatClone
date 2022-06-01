import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import About from "../components/resturantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems, { localFood } from "../components/resturantDetail/MenuItems";
import ViewCart from "../components/resturantDetail/ViewCart";

export default function ResturantDetails({ route, navigation }) {
  const [menuData, setMenuData] = useState(localFood);

  const getResturantMenu = async () => {
    const options = {
      method: "GET",
      url: "https://foodbukka.herokuapp.com/api/v1/menu",
    };
    return fetch(options.url, options)
      .then((response) => response.json())
      .then((json) => {
        //    console.log(json.Result.length);
        setMenuData(json.Result);
      });
  };
  useEffect(() => {
    getResturantMenu();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <About route={route}></About>
      <Divider width={1.8} style={{ marginVertical: 20 }}></Divider>
      <MenuItems foods={menuData} resturantName={route.params.name}></MenuItems>
      <ViewCart
        navigation={navigation}
        resturantName={route.params.name}
      ></ViewCart>
    </View>
  );
}
