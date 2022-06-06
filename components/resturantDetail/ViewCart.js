import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { ScrollView } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
//import firebase from "../../firebase";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { items, resturantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items.length;

  const addOrderToFirebase = async () => {
    setLoading(true);
    // const db = firebase.default.firestore();

    // db.collection("orders")
    //   .add({
    //     items: items,
    //     resturantName: resturantName,
    //   })
    //   .then(() => {
    //     alert("Order Placed Successfully");
    //     setModalVisible(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setModalVisible(false);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("OrderCompleted");
    }),
      2500;
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckOutContainer: {
      backgroundColor: "white",
      padding: 16,
      borderWidth: 1,
      height: "60%",
    },
    resturantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
    },
    subTotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subTotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}></View>
        <View style={styles.modalCheckOutContainer}>
          <Text style={styles.resturantName}>{resturantName}</Text>
          <ScrollView>
            {items.map((item, index) => (
              <OrderItem key={index} item={item}></OrderItem>
            ))}
          </ScrollView>
          <View style={styles.subTotalContainer}>
            <Text style={styles.subTotalText}>SubTotal</Text>
            <Text style={styles.subTotalText}>${total * 300}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                addOrderToFirebase();
              }}
              style={{
                marginTop: 20,
                backgroundColor: "black",
                padding: 13,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                position: "relative",
                width: 300,
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                Checkout
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 15,
                }}
              >
                ${total * 300}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total != 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 60,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",

                padding: 15,
                borderRadius: 30,
                width: "80%",
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginRight: 40,
                }}
              >
                View Cart
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                }}
              >
                Items: {total}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          ></LottieView>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
