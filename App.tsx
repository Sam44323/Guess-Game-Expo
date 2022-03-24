import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import Colors from "./constants/colors";
import GameEnd from "./screens/GameEnd";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [roundNumber, setRoundNumber] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const numberPicker = (value: number) => {
    setUserNumber(value);
    setGameOver(false);
  };

  const startNewGameHandler = () => {
    setUserNumber(0);
    setRoundNumber(0);
  };

  let screen = userNumber ? (
    <Game
      chosen={userNumber}
      gameOverHandler={(value: number) => {
        setGameOver(true);
        setRoundNumber(value);
      }}
    />
  ) : (
    <StartGame numberPicker={numberPicker} />
  );

  screen =
    gameOver && userNumber ? (
      <GameEnd
        userNumber={userNumber}
        rounds={roundNumber}
        onRestart={startNewGameHandler}
      />
    ) : (
      screen
    );

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
