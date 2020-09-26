import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet } from "react-native";

function ModalPopup(props) {
  const [ModalOpen, setModalOpen] = useState(false);
  const percentWon = ((props.won / props.countTime) * 100).toFixed(2);
  const percentLose = ((props.lose / props.countTime) * 100).toFixed(2);
  const percentTied = ((props.tied / props.countTime) * 100).toFixed(2);
  return (
    <View>
      {props.countTime ? (
        <View>
          <TouchableOpacity
            onPress={() => setModalOpen(true)}
            style={[styles.btnHistory, styles.shadowStyle]}
          >
            <Text style={{ color: "white", fontSize: 18 }}>See history</Text>
          </TouchableOpacity>

          <Modal
            visible={ModalOpen}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setModalOpen(false)}
          >
            <View style={styles.container}>
              <View style={styles.modalWrapper}>
                <Text style={{ fontSize: 25 }}>
                  Game has played: {props.countTime}
                </Text>
                <Text style={{ fontSize: 20 }}>
                  <Text>
                    Won: {props.won} Lose: {props.lose} Tied: {props.tied}
                  </Text>
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <Text style={{ fontSize: 23 }}>Percantage: </Text>
                  <Text style={{ fontSize: 18 }}>Won: {percentWon} %</Text>
                  <Text style={{ fontSize: 18 }}>Lose: {percentLose} %</Text>
                  <Text style={{ fontSize: 18 }}>Tied: {percentTied} %</Text>
                </View>
                <TouchableOpacity
                  style={styles.btnClose}
                  onPress={() => setModalOpen(false)}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>Close</Text>
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
    margin: 30,
    padding: 25,
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
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
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
