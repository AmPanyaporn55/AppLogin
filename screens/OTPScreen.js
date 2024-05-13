import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const verifyOTP = () => {
    navigation.navigate('SetPin');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/otp_icon.png')} style={styles.icon} />
      <Text style={styles.text}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์{'\n'}082-XXX-8998</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NumericKeypadScreen')}>
      <Text style={styles.buttonText}>ขอรหัส OTP</Text>
      </TouchableOpacity>

      <Text>{'\n'}</Text>
      <Text style={styles.text1}>กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
    width: 100,
    height: 100
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 100,
  },
  text1: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 100,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default OTPScreen;
