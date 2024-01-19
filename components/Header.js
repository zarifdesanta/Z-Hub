import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import OneBullet from "../assets/one_bullet.png";

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: "brown",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        borderRadius: 30,
        borderBottomColor: "transparent",
        marginTop: 10,
        overflow: "hidden",
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        GAME HUB
      </Text>
    </View>
  );
}
