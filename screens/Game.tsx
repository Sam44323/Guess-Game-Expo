import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

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

let [minBound, maxBound] = [1, 100];

const Game: React.FC<{ chosen: number; gameOverHandler: () => void }> = ({
  chosen,
  gameOverHandler,
}) => {
  const initialGuess = generateRandomBetween(minBound, maxBound, chosen);
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);

  useEffect(() => {
    if (maxBound - minBound === 2) {
      gameOverHandler();
    }
  }, [currentGuess]);

  const nextGuessHandler = (options: "lower" | "greater") => {
    if (
      (options === "lower" && currentGuess < chosen) ||
      (options === "greater" && currentGuess > chosen)
    ) {
      Alert.alert("Wrong!", "You know you are wrong!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (options === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess;
    }
    setCurrentGuess(generateRandomBetween(minBound, maxBound, chosen));
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent Guess!</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, { marginRight: 4 }]}>
            <PrimaryButton handlerFunction={() => nextGuessHandler("greater")}>
              +
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton handlerFunction={() => nextGuessHandler("lower")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 18,
  },
  buttonContainer: {
    flex: 1,
  },
});
