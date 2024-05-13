import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SelectLanguageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ยินดีต้อนรับ{'\n'}กรุณาเลือกภาษา</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Terms')}>
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Terms')}>
        <Text style={styles.buttonText}>ไทย</Text>
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
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30
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

export default SelectLanguageScreen;
