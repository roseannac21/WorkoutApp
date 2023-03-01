import { StatusBar } from 'expo-status-bar';
import WelcomePage from './components/welcome-page';
import Login from './components/login';
import SignUp from './components/signup';
import HomeScreen from './components/homescreen';
import User from './components/user';
import SingleExercise from './components/single-exercise';
import ExerciseList from './components/exercise-list';
import Workout from './components/workout';
import WorkoutList from './components/workout-list';
import ViewWorkout from './components/view-workout';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={WelcomePage}
          name="Welcome"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={Login} name="LogIn" options={{ title: '' }} />
        <Stack.Screen
          component={HomeScreen}
          name="HomeScreen"
          options={{ title: '' }}
        />
        <Stack.Screen
          component={SignUp}
          name="SignUp"
          options={{ title: '' }}
        />
        <Stack.Screen component={User} name="User" options={{ title: '' }} />
        <Stack.Screen
          component={ExerciseList}
          name="ExerciseList"
          options={{ title: '' }}
        />
        <Stack.Screen
          component={SingleExercise}
          name="SingleExercise"
          options={{ title: '' }}
        />
        <Stack.Screen
          component={Workout}
          name="Workout"
          options={{ title: '' }}
        />
        <Stack.Screen
          component={WorkoutList}
          name="WorkoutList"
          options={{ title: '' }}
        />
        <Stack.Screen
          component={ViewWorkout}
          name="ViewWorkout"
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
