import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from './screens/SplashScreen';
import SelectLanguageScreen from './screens/SelectLanguageScreen';
import TermsScreen from './screens/TermsScreen';
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import SetPinScreen from './screens/SetPinScreen';
import PhoneInputScreen from './screens/PhoneInputScreen';
import NumericKeypadScreen from './screens/NumericKeypadScreen';
import PinCodeLoginScreen from './screens/PinCodeLoginScreen';
import TouchIDScreen from './screens/TouchIDScreen';
import SuccessScreen from './screens/SuccessScreen';
import RegistrationScreen from './screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="SelectLanguage" component={SelectLanguageScreen} />
          <Stack.Screen name="Terms" component={TermsScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen name="SetPin" component={SetPinScreen} />
          <Stack.Screen name="PhoneInput" component={PhoneInputScreen} />
          <Stack.Screen name="NumericKeypadScreen" component={NumericKeypadScreen} />
          <Stack.Screen name="PinCodeLogin" component={PinCodeLoginScreen}/>
          <Stack.Screen name="TochID" component={TouchIDScreen}/>
          <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
          <Stack.Screen name="Registration" component={RegistrationScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
