import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonGroup, GameStatus, PlayerCard } from "./components/index";
import { CHOICES } from "./constants";
import { randomComputerChoice, getRoundOutcome } from "./utility";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePrompt: "",
      playerChoice: {},
      computerChoice: {},
    };
  }

  onPressButton = (playerChoice) => {
    const foundChoice = CHOICES.find((choice) => choice.name === playerChoice);
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(foundChoice.name, computerChoice.name);
    this.setState({
      playerChoice: foundChoice,
      computerChoice,
      gamePrompt: result,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameStatusWrapper}>
          <GameStatus result={this.state.gamePrompt} />
        </View>
        <View style={styles.gamePlayerWrapper}>
          <PlayerCard type="You" choice={this.state.playerChoice} />
          <Text>vs</Text>
          <PlayerCard type="Comp" choice={this.state.computerChoice} />
        </View>
        <View style={styles.buttonGroupWrapper}>
          <ButtonGroup onPressButton={this.onPressButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ebee",
  },
  gameStatusWrapper: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gamePlayerWrapper: {
    flex: 0.4,
    flexDirection: "row",
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: "grey",
    shadowOpacity: 0.9,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
  },
  buttonGroupWrapper: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
});
