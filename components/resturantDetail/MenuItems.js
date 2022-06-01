import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

export const localFood = [
  {
    images: [
      "https://res.cloudinary.com/jobizil/image/upload/v1602768183/images/menus/x4cspjvzqn2qk76sjhiw.jpg",
      "https://res.cloudinary.com/jobizil/image/upload/v1602768183/images/menus/xnurgo60mme1ewupfbin.jpg",
      "https://res.cloudinary.com/jobizil/image/upload/v1602768184/images/menus/ovni4qwzzxbufpsurlsg.jpg",
    ],
    _id: "5f5eccf4e923d0aca3e7d442",
    menuname: "Pounded Yam",
    description:
      "Yams that have been crushed or stirred to a creamy, dough - like consistency.Pounded yams are considered a fufu(a kind of starchy side dish) usually served with a stew or efo.",
    __v: 0,
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems(props) {
  const dispatch = useDispatch();
  const selectItem = (item, checkBoxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        resturantName: props.resturantName,
        checkBoxValue: checkBoxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.menuname === food.menuname));

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ height: "100%" }}>
      {props.foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
            ></BouncyCheckbox>
            <FoodInfo food={food}></FoodInfo>
            <FoodImage food={food}></FoodImage>
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          ></Divider>
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: "60%", justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.menuname}</Text>
    <Text>{props.food.description.substring(0, 100)}...</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.images[0] }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    ></Image>
  </View>
);
