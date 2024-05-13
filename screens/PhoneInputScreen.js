import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PhoneInputScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const addDigit = (digit) => {
    setPhoneNumber(prev => prev.length < 10 ? prev + digit : prev);
  };

  const deleteDigit = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handleNext = () => {
    navigation.navigate('OTPScreen', { phoneNumber });
  };

  const Key = ({ digit, letters }) => (
    <TouchableOpacity style={styles.key} onPress={() => addDigit(digit)}>
      <Text style={styles.keyDigit}>{digit}</Text>
      <Text style={styles.keyLetters}>{letters}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ยินดีต้อนรับ</Text>
      <Text style={styles.subText}>กรุณากรอกรหัสผู้ใช้ที่เราได้ให้คุณ</Text>
      <Text style={styles.phoneNumber}>{phoneNumber.padEnd(10, ' ')}</Text>
      <View style={styles.keypad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit, index) => (
          <Key key={index} digit={digit} letters={['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'][index % 8]} />
        ))}
        <TouchableOpacity style={styles.key} onPress={deleteDigit}>
          <Text style={styles.keyDigit}>⌫</Text>
        </TouchableOpacity>
        <Key digit={0} letters="" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>ถัดไป</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    marginBottom: 20,
  },
  phoneNumber: {
    fontSize: 30,
    letterSpacing: 2,
    marginBottom: 20,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  key: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  keyDigit: {
    fontSize: 22,
  },
  keyLetters: {
    fontSize: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default PhoneInputScreen;
