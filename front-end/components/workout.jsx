import { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getAllExercises, postWorkout } from "../utils/api";
import { Card } from "react-native-elements";
import SingleWorkout from "./single-workout";

const Workout = ({ navigation, route }) => {
  const { id } = route.params;
  const [allExercises, setAllExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [workoutName, setWorkoutName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const fetchedExcercises = await getAllExercises();
      setAllExercises(fetchedExcercises.exercises);
    }
    fetchData();
  }, []);

  // console.log(selectedExercises);
  // console.log(workoutName);
  const renderItem = ({ item }) => {
    const backgroundColor = selectedExercises.includes(item.name)
      ? "#6E3B6E"
      : "#F9C2FF";
    const color = selectedExercises.includes(item.name) ? "#fff" : "#000";

    return (
      <SingleWorkout
        item={item}
        onPress={() => {
          setSelectedExercises((currExercises) => {
            if (currExercises.includes(item.name)) {
              const index = currExercises.indexOf(item.name);
              currExercises.splice(index, 1);
              return [...currExercises];
            } else {
              return [...currExercises, item.name];
            }
          });
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            Name Your Workout
          </Text>
          <TextInput
            style={{
              borderColor: "#C6C6C6",
              borderWidth: 0.5,
              textAlign: "center",
            }}
            onChangeText={(workout) => {
              setWorkoutName(workout);
            }}
            placeholder="Name your workout"
          ></TextInput>
        </View>
      </View>

      <FlatList
        data={allExercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        extraData={selectedExercises}
      ></FlatList>

      <TouchableOpacity
        style={{
          backgroundColor: "#87CEEB",
          padding: 5,
          borderRadius: 10,
          margin: 15,
        }}
        onPress={() => {
          const postWorkoutBody = [];
          selectedExercises.forEach((ex) => {
            postWorkoutBody.push({ exercise: ex });
          });
          postWorkout(id, workoutName, postWorkoutBody);
          navigation.goBack(null);
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 22,
            color: "#fff",
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Workout;
