import { View, Text, Image } from "react-native";
import React from "react";

// const image =
//   "https://res.cloudinary.com/jobizil/image/upload/v1602289542/images/restaurant/rhpnydmmfj8kejlzecq6.jpg";

// const title = "Farmhouse Pizza Thai Delivery";
// const description = "Thai · Comfort Food ·  $$ · 🎟️ · 4 ⭐ (2931+)";

export default function About(props)
{
  const { name, rating, description, image, price } = props.route.params;
  const formatedDescription = `${description.substring(0, 50)}  ·  $${price}  ·  🎟️  ·  ${rating} ⭐` ;

  return (
    <View>
      <ResturantImage image={image}></ResturantImage>
      <ResturantTitle title={name}></ResturantTitle>
      <ResturantDescription description={formatedDescription}></ResturantDescription>
    </View>
  );
}

const ResturantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const ResturantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const ResturantDescription = (props) => (
  <Text style={{ marginTop: 10, marginHorizontal: 15, fontSize: 16 }}>
    {props.description}
  </Text>
);
