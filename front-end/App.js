import { StatusBar } from 'expo-status-bar';
import WelcomePage from './components/welcome-page';
import Login from './components/login';
import HomeScreen from './components/homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={WelcomePage} name="Welcome" options={{headerShown: false}}/>
        <Stack.Screen component={Login} name="LogIn" />
        <Stack.Screen component={HomeScreen} name="Homescreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// });
