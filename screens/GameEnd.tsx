import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

const GameEnd: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text>Your phone needed X round to guess the number Y</Text>
    </View>
  );
};

export default GameEnd;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    borderRadius: 200,
    width: 300,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
