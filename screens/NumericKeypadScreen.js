import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const NumericKeypadScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) return;
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleInput = (num) => {
    setInputValue((prev) => {
      const updatedValue = (prev + num).slice(0, 4); 
      if (updatedValue.length === 4) {
        
        navigation.navigate('SetPin');
      }
      return updatedValue;
    });
  };

  const deleteLastInput = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const resendOTP = () => {
    setTimer(60);
    // Logic to resend OTP goes here
  };

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['🔙', '0', '✖️']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ยืนยันตัวตน</Text>
      <Text style={styles.subtitle}>กรุณากรอกรหัสยืนยันที่ได้รับทางโทรศัพท์</Text>
      <Text style={styles.phoneNumber}>082-XXX-8998</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        editable={false}
      />
      <View style={styles.keypad}>
        {keys.map((row, index) => (
          <View key={index} style={styles.keyRow}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={styles.key}
                onPress={() => {
                  if (key === '🔙') deleteLastInput();
                  else if (key === '✖️') setInputValue('');
                  else handleInput(key);
                }}
              >
                <Text style={styles.keyText}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <Text style={styles.timerText}>หากคุณไม่ได้รับรหัส?</Text>
      {timer > 0 ? (
        <Text style={styles.timer}>{`ส่งรหัสใหม่ (${timer}s)`}</Text>
      ) : (
        <TouchableOpacity onPress={resendOTP}>
          <Text style={styles.resendLink}>ส่งรหัสใหม่</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5
  },
  phoneNumber: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20
  },
  input: {
    fontSize: 24,
    letterSpacing: 15,
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  },
  keypad: {
    width: '100%',
    alignItems: 'center'
  },
  keyRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  key: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 5,
    borderRadius: 10
  },
  keyText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  timerText: {
    fontSize: 16,
    color: 'gray'
  },
  timer: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10
  },
  resendLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline'
  }
});

export default NumericKeypadScreen;
