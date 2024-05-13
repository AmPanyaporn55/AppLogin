import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TouchIDScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in with Touch ID</Text>
      <Image style={styles.fingerprintImage} source={require('../assets/icons/fingerprint-scan.png')} />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Authenticate with Touch ID')}>
        <Text style={styles.buttonText}>เพิ่มลายนิ้วมือ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PinCodeLogin')}>
        <Text style={styles.buttonText}>ข้าม</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  title: {
    fontSize: 22, marginBottom: 10
  },
  fingerprintImage: {
    width: 128, height: 128, marginBottom: 20
  },
  button: {
    backgroundColor: 'green', padding: 10, borderRadius: 5, marginBottom: 10
  },
  buttonText: {
    color: '#fff'
  }
});

export default TouchIDScreen;
