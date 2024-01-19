import {
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import Card from "../components/Card";
import BGGrad1 from "../assets/bgGrad1.jpg";
import MatIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { wallList } from "../api/WallList";

export default function Wallpaper() {
  const [currentId, setCurrentId] = useState();

  const renderItem = ({ item }) => {
    return (
      <Card
        key={item.id}
        name={item.name}
        image={item.image}
        res={item.res}
      ></Card>
    );
  };

  const flatListRef = useRef();

  const toTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const toLast = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: wallList.length - 1,
    });
  };

  return (
    <ImageBackground
      source={BGGrad1}
      resizeMode="cover"
      blurRadius={24}
      style={{ flex: 1 }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "transparent",
          marginBottom: 100,
          marginTop: 100,
        }}
      >
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          style={{
            width: "100%",
            backgroundColor: "transparent",
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width}
          ref={flatListRef}
          data={wallList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={toTop}
            style={{
              backgroundColor: "transparent",
              borderRadius: 30,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
            }}
          >
            <MatIcon name="arrow-left-circle" color="white" size={40}></MatIcon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toLast}
            style={{
              backgroundColor: "transparent",
              borderRadius: 30,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
            }}
          >
            <MatIcon
              name="arrow-right-circle"
              color="white"
              size={40}
            ></MatIcon>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
