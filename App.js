import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AboutMe from "./screens/AboutMe";
import CardScreen from "./components/CardScreen";
import MatIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import BGGrad1 from "./assets/bgGrad1.jpg";
import { gameList } from "./api/GameList";
import { wallList } from "./api/WallList";

const Tab = createBottomTabNavigator();

export function GameScreen() {
  return <CardScreen itemList={gameList}></CardScreen>;
}

export function WallpaperScreen() {
  return <CardScreen itemList={wallList}></CardScreen>;
}

export default function App() {
  const Icon = (iconName, iconSize, iconColor) => {
    return (
      <MatIcon name={iconName} size={iconSize} color={iconColor}></MatIcon>
    );
  };
  return (
    <ImageBackground
      backgroundColor="#3c2116"
      resizeMode="cover"
      blurRadius={24}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, backgroundColor: "transparent", overflow: "hidden" }}
      >
        <StatusBar style="light"></StatusBar>

        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "transparent",
            overflow: "hidden",
          }}
        >
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#a75b3b",
                  borderRadius: 30,
                  height: 70,
                },
                headerBackgroundContainerStyle: {
                  backgroundColor: "#a75b3b",
                  borderRadius: 30,
                  marginTop: 10,
                  marginLeft: 30,
                  marginRight: 30,
                  elevation: 20,
                  zIndex: -100,
                },

                headerTransparent: true,
                headerShown: true,
                headerTitle: "Z-HUB",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "white",
                },

                headerTitleAlign: "center",
                tabBarShowLabel: false,
                tabBarStyle: {
                  height: 60,
                  backgroundColor: "#a75b3b",
                  borderRadius: 50,
                  marginBottom: 10,
                  elevation: 5,
                  borderColor: "transparent",
                  position: "absolute",
                  borderTopWidth: 0,
                  alignItems: "center",
                  paddingTop: 5,
                  paddingBottom: 5,
                  marginLeft: 30,
                  marginRight: 30,
                },

                tabBarItemStyle: {
                  borderRadius: 50,

                  maxWidth: 108,
                  borderWidth: 0,
                  borderColor: "black",
                },
                tabBarLabelStyle: {
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                },
              }}
            >
              <Tab.Screen
                name="Home"
                component={GameScreen}
                options={{
                  tabBarIcon: () => Icon("controller-classic", 45, "white"),
                  tabBarActiveBackgroundColor: "#743f28",
                  tabBarInactiveBackgroundColor: "#a75b3b",
                }}
              />
              <Tab.Screen
                name="Wallpaper"
                component={WallpaperScreen}
                options={{
                  tabBarIcon: () => Icon("format-paint", 35, "white"),
                  tabBarActiveBackgroundColor: "#743f28",
                  tabBarInactiveBackgroundColor: "#a75b3b",
                }}
              />
              <Tab.Screen
                name="About Me"
                component={AboutMe}
                options={{
                  tabBarIcon: () => Icon("information", 40, "white"),
                  tabBarActiveBackgroundColor: "#743f28",
                  tabBarInactiveBackgroundColor: "#a75b3b",
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
