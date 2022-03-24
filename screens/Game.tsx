import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Game: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent Guess!</Text>
      <View>
        <Text style={styles.title}>Higher or Lower?</Text>
      </View>
      <View>
        <Text style={styles.title}>Log Rounds</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
  },
});
