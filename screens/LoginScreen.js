import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  }
  const handleLogin = () => {
    if (username && password) {  
      console.log('Attempting to log in...');
      
      navigation.navigate('SetPin');  
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ชื่อผู้ใช้</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="ชื่อผู้ใช้"
      />
      <Text style={styles.label}>รหัสผ่าน</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        placeholder="รหัสผ่าน"
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          <Text style={styles.checkboxText}>{isSelected ? "✓" : ""}</Text>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>บันทึกการเข้าสู่ระบบ</Text>
      </View>
      
      <Text style={styles.forgotPassword} onPress={() => navigation.navigate('OTP')}>ลืมรหัสผ่าน?</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      <Text>-----------------------ไม่มีบัญชีผู้ใช้------------------------</Text>
      <Text>{'\n'}</Text>
      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.buttonOutlineText}>เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 5
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 30,
    marginBottom: 40,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  checkbox: {
    width: 19,
    height: 19,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxText: {
    fontSize: 13,
  },
  checkboxLabel: {
    fontSize: 13,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonOutline: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green'
  },
  buttonOutlineText: {
    color: 'green',
    fontSize: 18,
    alignItems: 'flex-end',
  },
  forgotPassword: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 18,
    alignSelf: 'flex-end',
    textDecorationLine: 'underline'

  }
});

export default LoginScreen;
