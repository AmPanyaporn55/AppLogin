import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Authentication Successful!</Text>
      <Button title="Proceed" onPress={() => navigation.navigate('Splash')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default SuccessScreen;
