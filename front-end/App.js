import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import WelcomePage from './components/welcome-page'
import SignUpButton from './components/sign-up-button';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpPage from './components/sign-up-page';

const Stack = createNativeStackNavigator();


export default function App() {
  return ( <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Welcome"
      component={WelcomePage}/>
      <Stack.Screen name="SignUp" component={SignUpButton}/>
    </Stack.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
