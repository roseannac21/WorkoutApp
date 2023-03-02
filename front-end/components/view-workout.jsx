import { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, Text, SafeAreaView } from 'react-native';
import { getWorkoutsById } from '../utils/api';
import ExerciseInWorkout from './exercise-in-workout';

const ViewWorkout = ({ route }) => {
  const [workoutById, setWorkoutById] = useState([]);
  console.log(workoutById.workout, '<-- WRKOUT');

  const { workoutID, userId } = route.params;
  console.log(workoutID, '<- W ID');
  console.log(userId, '<- U ID');
  useEffect(() => {
    async function fetchData() {
      const fetchedWorkoutsById = await getWorkoutsById(userId, workoutID);
      setWorkoutById(fetchedWorkoutsById);
    }
    fetchData();
  }, []);

  const renderExercise = ({item}) => {
    return <ExerciseInWorkout item={item}/>;
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
