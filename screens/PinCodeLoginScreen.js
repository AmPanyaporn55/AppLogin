import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const PinCodeLoginScreen = ({ route, navigation }) => {
  const { pin } = route.params || { pin: '' };
  const [enteredPin, setEnteredPin] = useState('');

  const handleInput = (num) => {
    let newPin = enteredPin + num;
    if (newPin.length > 4) newPin = newPin.slice(0, 4); 
    setEnteredPin(newPin);

    // Check if the entered PIN is complete and correct
    if (newPin.length === 4) {
        if (newPin === pin) {
            navigation.navigate('SuccessScreen'); // Navigate to the success screen on correct PIN
        } else {
            alert('PIN does not match. Try again.');
            setEnteredPin(''); // Clear the entered PIN
        }
    }
};

const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['TouchID', '0', '🔙']
];

return (
    <View style={styles.container}>
        <Text style={styles.title}>กรุณากรอกรหัส PIN</Text>
        <View style={styles.pinDisplay}>
            {Array(4).fill(0).map((_, index) => (
                <View key={index} style={[styles.pinCircle, { backgroundColor: index < enteredPin.length ? '#000' : '#fff' }]} />
            ))}
        </View>
        <View style={styles.keypad}>
            {keys.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((key, keyIndex) => (
                        <TouchableOpacity
                            key={keyIndex}
                            style={[styles.key, { backgroundColor: key === '🔙' ? '#f0f0f0' : '#fff', borderWidth: key ? 1 : 0 }]}
                            onPress={() => {
                                if (key === '🔙') {
                                    handleDelete();
                                } else if (key === 'TouchID') {
                                    navigation.navigate('TouchID'); // Ensure this is configured in your navigator
                                } else {
                                    handleInput(key);
                                }
                            }}
                            disabled={key === ''}
                        >
                            {key === 'TouchID' ? (
                                <Image style={styles.fingerprintImage} source={require('../assets/icons/fingerprint-scan.png')} />
                            ) : (
                                <Text style={styles.keyText}>{key}</Text>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
        <Text style={styles.forgotPin}>ลืมรหัส PIN ?</Text>
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
      fontSize: 18,
      marginBottom: 20,
      color: '#333'
    },
    pinDisplay: {
      flexDirection: 'row',
      marginBottom: 20
    },
    pinCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
      marginHorizontal: 10
    },
    keypad: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10
    },
    key: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 30,
      borderColor: '#ccc',
      borderWidth: 1
    },
    keyText: {
      fontSize: 24,
      color: '#333'
    },
    forgotPin: {
      marginTop: 20,
      color: '#0000FF',
      textDecorationLine: 'underline',
      fontSize: 16
    },
    fingerprintImage: {
      width: 50, 
      height: 50, 
      resizeMode: 'contain' // Ensure the image scales correctly
    }
  });

export default PinCodeLoginScreen;
