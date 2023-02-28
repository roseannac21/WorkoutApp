import { StatusBar } from "expo-status-bar";
import WelcomePage from "./components/welcome-page";
import Login from "./components/login";
import SignUp from "./components/signup";
import HomeScreen from "./components/homescreen";
import User from "./components/user";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleExercise from "./components/single-exercise";
import ExerciseList from "./components/exercise-list";

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
        <Stack.Screen component={Login} name="LogIn" />
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
        <Stack.Screen component={SignUp} name="SignUp" />
        <Stack.Screen component={User} name="User" />
        <Stack.Screen component={ExerciseList} name="ExerciseList" />
        <Stack.Screen component={SingleExercise} name="SingleExercise" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
