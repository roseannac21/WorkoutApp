import { useState } from "react";
import { useEffect } from "react";
import { FlatList, Text, SafeAreaView } from "react-native";
import { getWorkoutsById } from "../utils/api";
import ExerciseInWorkout from "./exercise-in-workout";

const ViewWorkout = ({ route }) => {
  const [workoutById, setWorkoutById] = useState([]);

  const { workoutID, userId } = route.params;
  useEffect(() => {
    async function fetchData() {
      const fetchedWorkoutsById = await getWorkoutsById(userId, workoutID);
      setWorkoutById(fetchedWorkoutsById);
    }
    fetchData();
  }, []);

  const renderExercise = ({ item }) => {
    return <ExerciseInWorkout item={item} />;
  };

  return (
    <SafeAreaView>
      <Text>Workout Name: {workoutById.name}</Text>
      <FlatList
        data={workoutById.workout}
        renderItem={renderExercise}
      ></FlatList>
    </SafeAreaView>
  );
};

export default ViewWorkout;
