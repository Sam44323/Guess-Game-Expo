import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const Game: React.FC<{ chosen: number }> = ({ chosen }) => {
  const initialGuess = generateRandomBetween(1, 100, chosen);
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent Guess!</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
});
