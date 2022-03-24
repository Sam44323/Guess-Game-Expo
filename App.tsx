import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import Colors from "./constants/colors";
import GameEnd from "./screens/GameEnd";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const numberPicker = (value: number) => {
    setUserNumber(value);
    setGameOver(false);
  };

  let screen = userNumber ? (
    <Game chosen={userNumber} gameOverHandler={() => setGameOver(true)} />
  ) : (
    <StartGame numberPicker={numberPicker} />
  );

  screen = gameOver ? <GameEnd /> : screen;

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[`${Colors.primary700}`, `${Colors.accent500}`]}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        height={1}
        width={1}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
