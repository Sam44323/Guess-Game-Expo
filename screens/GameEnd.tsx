import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

interface GameEndProps {
  rounds: number;
  userNumber: number;
  onRestart: () => void;
}

const GameEnd: React.FC<GameEndProps> = ({ rounds, userNumber, onRestart }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 350) {
    imageSize = 150;
  }

  if (height < 430) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
        <PrimaryButton handlerFunction={onRestart}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameEnd;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
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
