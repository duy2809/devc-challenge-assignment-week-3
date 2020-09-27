import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet } from "react-native";

function ModalPopup(props) {
  const [ModalOpen, setModalOpen] = useState(false);

  function calPercent(num, total) {
    let res = (num / total) * 100;
    if (Number.isInteger(res)) return res;
    else return res.toFixed(2);
  }

  const percentWon = calPercent(props.won, props.countTime);
  const percentLose = calPercent(props.lose, props.countTime);
  const percentTied = calPercent(props.tied, props.countTime);

  return (
    <View>
      {props.countTime ? (
        <View>
          <TouchableOpacity
            onPress={() => setModalOpen(true)}
            style={[styles.btnHistory, styles.shadowStyle]}
          >
            <Text style={styles.textBtn}>See history</Text>
          </TouchableOpacity>

          <Modal
            visible={ModalOpen}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setModalOpen(false)}
          >
            <View style={styles.container}>
              <View style={[styles.modalWrapper, styles.shadowStyle]}>
                <Text style={{ fontSize: 30 }}>
                  Game has played: {props.countTime}
                </Text>
                <Text style={{ fontSize: 25, color: "green" }}>
                  Won: {props.won}
                </Text>
                <Text style={{ fontSize: 25, color: "red" }}>
                  Lose: {props.lose}
                </Text>
                <Text style={{ fontSize: 25, color: "darkkhaki" }}>
                  Tied: {props.tied}
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>Percantage: </Text>
                  <Text style={{ fontSize: 25, color: "green" }}>
                    Won: {percentWon}%
                  </Text>
                  <Text style={{ fontSize: 25, color: "red" }}>
                    Lose: {percentLose}%
                  </Text>
                  <Text style={{ fontSize: 25, color: "darkkhaki" }}>
                    Tied: {percentTied}%
                  </Text>
                </View>
                <TouchableOpacity
                  style={[styles.btnClose, styles.shadowStyle]}
                  onPress={() => setModalOpen(false)}
                >
                  <Text style={styles.textBtn}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000aa",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalWrapper: {
    // flex: 0.5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },

  btnClose: {
    padding: 10,
    backgroundColor: "#008CBA",
    borderRadius: 5,
    marginTop: 20,
  },

  btnHistory: {
    backgroundColor: "#008CBA",
    padding: 10,
    borderRadius: 5,
  },

  textBtn: {
    color: "white",
    fontSize: 18,
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

export default ModalPopup;
