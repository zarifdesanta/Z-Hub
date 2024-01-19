import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import React from "react";
import MatIcon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Card({
  name,
  image,
  res,
  iconName = "download-circle",
  link,
}) {
  return (
    <View
      style={{
        elevation: 15,
        width: Dimensions.get("window").width - 60,
        minHeight: 250,
        height: 400,
        backgroundColor: "transparent",
        borderRadius: 30,
        margin: 30,
      }}
    >
      <ImageBackground
        backgroundColor="#a75b3b"
        borderRadius={30}
        blurRadius={24}
      >
        <View
          style={{
            minHeight: 250,
            height: 400,
            width: Dimensions.get("window").width - 60,
            backgroundColor: "transparent",
            borderRadius: 30,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Image
            source={image}
            style={{
              width: Dimensions.get("window").width - 80,
              height: 250,
              borderRadius: 30,
              margin: 10,
            }}
          ></Image>
          <Text
            style={{
              marginTop: 5,
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
            }}
          >
            {res}
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <MatIcon name={iconName} color="white" size={40}></MatIcon>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
