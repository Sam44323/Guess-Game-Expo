import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

interface GameEndProps {
  rounds: number;
  userNumber: number;
  onRestart: () => void;
}

const GameEnd: React.FC<GameEndProps> = ({ rounds, userNumber, onRestart }) => {
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
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{rounds}</Text>{" "}
        round to guess the number{" "}
        <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton handlerFunction={onRestart}>Start New Game</PrimaryButton>
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
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
