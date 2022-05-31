import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/home";
import ResturantDetails from "./screens/ResturantDetails";

export default function App() {
  //return <Home></Home>;
  return <ResturantDetails></ResturantDetails>;
}
