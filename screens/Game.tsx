import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";

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
let counter = 0;

const Game: React.FC<{
  chosen: number;
  gameOverHandler: (value: number) => void;
}> = ({ chosen, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(minBound, maxBound, chosen);
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (maxBound - minBound <= 2) {
      gameOverHandler(counter);
    }
  }, [currentGuess]);

  useEffect(() => {
    maxBound = 100;
    minBound = 1;
    counter = 0;
  }, []);

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
    counter++;
    setCurrentGuess(generateRandomBetween(minBound, maxBound, chosen));
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText
          style={{
            marginBottom: 18,
          }}
        >
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, , { marginRight: 4 }]}>
            <PrimaryButton handlerFunction={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton handlerFunction={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={[styles.buttonContainer, , { marginRight: 4 }]}>
            <PrimaryButton handlerFunction={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton handlerFunction={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent Guess!</Title>
      {content}
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
