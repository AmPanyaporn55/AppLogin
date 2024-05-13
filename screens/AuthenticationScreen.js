import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const AuthenticationScreen = ({ navigation }) => {
  const [useTouchID, setUseTouchID] = useState(true);

  const handleAuthentication = () => {
    console.log("Authenticating using Touch ID");
  };

  const toggleTouchID = () => {
    setUseTouchID(!useTouchID);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={useTouchID}
        onRequestClose={() => {
          setUseTouchID(!useTouchID);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Touch ID for "CGS Application"</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleAuthentication}
            >
              <Text style={styles.textStyle}>Enter Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleTouchID}
            >
              <Text style={styles.textStyle}>Use PIN Instead</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {!useTouchID && (
        <View style={styles.numericKeypad}>
          <Text>Implement Numeric Keypad Here</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  numericKeypad: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  key: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 35,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  },
  keyText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333'
  }
  
});

export default AuthenticationScreen;
