import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

// const storePin = async (pin) => {
//   try {
//     await AsyncStorage,setItem('userPin',pin);
//   }catch (error) {
//     console.error('Failed to store the PIN:' , error);
//   }
// }

const SetPinScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [stage, setStage] = useState('set'); 

  const handleInput = (num) => {
    if (stage === 'set') {
      setPin((prev) => {
        const updatedPin = prev.length < 4 ? prev + num : prev;
        if (updatedPin.length === 4) setStage('confirm');
        return updatedPin;
      });
    } else {
      setConfirmPin((prev) => {
        const updatedPin = prev.length < 4 ? prev + num : prev;
        if (updatedPin.length === 4 && updatedPin === pin) {
          navigation.navigate('TochID'); // Navigate to the next screen on successful PIN setup
        } else if (updatedPin.length === 4) {
          alert('PIN does not match. Try again.');
          setConfirmPin('');
        }
        return updatedPin;
      });
    }
  };

  const handleDelete = () => {
    if (stage === 'set') {
      setPin((prev) => prev.slice(0, -1));
    } else {
      setConfirmPin((prev) => prev.slice(0, -1));
    }
  };

  const PinCircles = ({ pinLength }) => (
    <View style={styles.pinContainer}>
      {[0, 1, 2, 3].map((index) => (
        <View
          key={index}
          style={[styles.pinCircle, pinLength > index ? styles.filledCircle : null]}
        />
      ))}
    </View>
  );

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', '🔙']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{stage === 'set' ? 'ตั้งรหัส PIN' : 'ยืนยันรหัส PIN'}</Text>
      <PinCircles pinLength={stage === 'set' ? pin.length : confirmPin.length} />
      <View style={styles.keypad}>
        {keys.map((row, index) => (
          <View key={index} style={styles.keyRow}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={styles.key}
                onPress={() => key === '🔙' ? handleDelete() : handleInput(key)}
                disabled={key === ''}
              >
                <Text style={styles.keyText}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
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
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  pinCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    backgroundColor: '#fff'
  },
  filledCircle: {
    backgroundColor: '#000'
  },
  keypad: {
    alignItems: 'center',
  },
  keyRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  key: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#f0f0f0'
  },
  keyText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default SetPinScreen;
