import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const loacalResturant = [
  {
    __v: 0,
    _id: "5f5eccf3e923d0aca3e7d413",
    address: "Shop 4 Imol Plaza, Ado Road, Ajah, Lagos Nigeria",
    averagecost: 700,
    businessname: "spicebowl restaurant ajah",
    email: "spicebowl-restaurant-ajah@gmail.com",
    foodMenu: [],
    id: "5f5eccf3e923d0aca3e7d413",
    image:
      "https://res.cloudinary.com/jobizil/image/upload/v1602289542/images/restaurant/rhpnydmmfj8kejlzecq6.jpg",
    imageId: "kleewjlk",
    location: "Ajah",
    menu: "5f5eccf4e923d0aca3e7d449",
    parkinglot: false,
    phone: "08145290260",
    restauranttype: "canteen",
    reviews: 12,
    slug: "spicebowl-restaurant-ajah",
  },
];

export default function ResturantItems({ navigation, ...props }) {
  return props.resturantData.length != 0 ? (
    <View>
      {props.resturantData.map((resturant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("ResturantDetail", {
              name: resturant.businessname,
              rating: resturant.reviews,
              description: resturant.address,
              image: resturant.image,
              price: resturant.averagecost,
            });
          }}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <ResturantImage image={resturant.image} />
            <ResturantInfo
              name={resturant.businessname}
              rating={resturant.reviews}
              decription={resturant.address}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  ) : (
    <View style={{ paddingTop: "20%" }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        No Data Availabe
      </Text>
    </View>
  );
}

const ResturantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180 }}
    ></Image>
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialComunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const ResturantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View style={{}}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey", width: "80%" }}>
        {props.decription}
      </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
