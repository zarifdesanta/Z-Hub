import {
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import BGGrad1 from "../assets/bgGrad1.jpg";
import Card from "../components/Card";
import MatIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { gameList } from "../api/GameList";

export default function Games() {
  const renderItem = ({ item }) => {
    return <Card name={item.name} image={item.image}></Card>;
  };

  const flatListRef = useRef();

  const toTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const toLast = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: gameList.length - 1,
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
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width}
          ref={flatListRef}
          data={gameList}
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
