import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DisclaimerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>เงื่อนไขการใช้บริการ</Text>
      <View style={styles.textArea}>
        <Text style={styles.textContent}>Disclaimer content here...</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {/* Handle Accept */}}>
        <Text style={styles.buttonText}>ยอมรับ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {/* Handle Decline */}}>
        <Text style={styles.buttonText}>ไม่ยอมรับ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20
  },
  textArea: {
    width: '90%',
    minHeight: 100,
    padding: 10,
    marginBottom: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  textContent: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});

export default DisclaimerScreen;
