import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  ButtonGroup,
  GameStatus,
  PlayerCard,
  ModalPopup,
} from "./components/index";
import { CHOICES } from "./constants";
import { randomComputerChoice, getRoundOutcome } from "./utility";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePrompt: "",
      playerChoice: {},
      computerChoice: {},
      countTime: 0,
      won: 0,
      lose: 0,
      tied: 0,
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
      countTime: this.state.countTime + 1,
    });
    if (result === "Victory!") this.setState({ won: this.state.won + 1 });
    else {
      if (result === "Defeat!") this.setState({ lose: this.state.lose + 1 });
      else this.setState({ tied: this.state.tied + 1 });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameStatusWrapper}>
          <GameStatus
            result={this.state.gamePrompt}
            countTime={this.state.countTime}
            won={this.state.won}
            lose={this.state.lose}
            tied={this.state.tied}
          />
        </View>
        <View style={styles.btnOpenModal}>
          <ModalPopup
            result={this.state.gamePrompt}
            countTime={this.state.countTime}
            won={this.state.won}
            lose={this.state.lose}
            tied={this.state.tied}
          />
        </View>
        <View style={[styles.gamePlayerWrapper, styles.shadowStyle]}>
          <PlayerCard type="You" choice={this.state.playerChoice} />
          <Text style={{ fontSize: 24 }}>vs</Text>
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
    flex: 0.175,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnOpenModal: {
    flex: 0.125,
    justifyContent: "center",
    alignItems: "center",
  },
  gamePlayerWrapper: {
    flex: 0.3,
    flexDirection: "row",
    margin: 10,
    borderWidth: 2,
    paddingTop: 75,
    shadowRadius: 5,
    paddingBottom: 75,
    borderColor: "grey",
    shadowOpacity: 0.9,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
    borderRadius: 15,
  },
  buttonGroupWrapper: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
