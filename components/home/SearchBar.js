import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyCRv8gYMMzGBZSA8QnlSzsZbZmKPjNX8YE" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = date.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            alignItems: "center",
            flexDirection: "row",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
              marginRight: 8,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 8 }}
            ></AntDesign>
            <Text>Search</Text>
          </View>
        )}
      ></GooglePlacesAutocomplete>
    </View>
  );
}
