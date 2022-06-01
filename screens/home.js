import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import ResturantItems, {
  loacalResturant,
} from "../components/home/ResturantItems";
import BotomTabs from "../components/home/BotomTabs";
import { Divider } from "react-native-elements";

const YELP_API_KEY = "";

export default function Home({ navigation }) {
  const [resturantData, setresturantData] = useState(loacalResturant);
  const [city, setCity] = useState("Hollywood");
  const [activeTab, setactiveTab] = useState("Delivery");

  const getResturantData = async () => {
    var query =
      activeTab == "Delivery" ? "parkinglot=false" : "parkinglot=true";
    const options = {
      method: "GET",
      url: `https://foodbukka.herokuapp.com/api/v1/restaurant?${query}`,
    };
    return fetch(options.url, options)
      .then((response) => response.json())
      .then((json) => {
        //    console.log(json.Result.length);
        setresturantData(json.Result);
      });
  };
  useEffect(() => {
    getResturantData();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs
          activeTab={activeTab}
          setactiveTab={setactiveTab}
        ></HeaderTabs>
        <SearchBar cityHandler={setCity}></SearchBar>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories></Categories>
        <ResturantItems
          resturantData={resturantData}
          navigation={navigation}
        ></ResturantItems>
      </ScrollView>
      <Divider width={1}></Divider>
      <BotomTabs></BotomTabs>
    </SafeAreaView>
  );
}
