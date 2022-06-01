import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetails from "./screens/ResturantDetails";

import { Provider as ReduxProvider } from "react-redux";
//import store from "./redux/store";
import configureStore from "./redux/store";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ResturantDetail" component={ResturantDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
