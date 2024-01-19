import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import BGGrad1 from "../assets/bgGrad1.jpg";
import BGMY from "../assets/bgMy.png";
import MatIcon from "@expo/vector-icons/MaterialCommunityIcons";

const Icon = (iconName, iconSize, iconColor) => {
  return <MatIcon name={iconName} size={iconSize} color={iconColor}></MatIcon>;
};

export default function AboutMe() {
  return (
    <ImageBackground
      source={BGMY}
      resizeMode="cover"
      blurRadius={10}
      style={{ flex: 1 }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 30,
          marginRight: 30,
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <MatIcon
          name="face-man"
          color="white"
          size={50}
          style={{ marginBottom: 10 }}
        ></MatIcon>
        <Text style={styles.text}>ZARFDEV</Text>
        <Text style={styles.text}>zarifdesanta@gmail.com</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://zarfdev.netlify.app/")}
        >
          <Text style={styles.text}>zarfdev.netlify.app</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://vangari.netlify.app/")}
        >
          <Text style={styles.text}>vangari.netlify.app</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
