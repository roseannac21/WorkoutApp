import { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { getWorkoutsById } from '../utils/api';
import ExerciseInWorkout from './exercise-in-workout';

const ViewWorkout = ({ route }) => {
  const [workoutById, setWorkoutById] = useState([]);
 


  const { workoutID, userId } = route.params;
  useEffect(() => {
    async function fetchData() {
      const fetchWorkoutsById = await getWorkoutsById(userId, workoutID);
      setWorkoutById(fetchWorkoutsById);
    }
    fetchData();
  }, []);

  const renderExercise = ({ item }) => {
    return <ExerciseInWorkout item={item} />;
  };

  return (
    <SafeAreaView>
      <View style={[styles.background]}>
        <Text style={[styles.title]}>{workoutById.name}</Text>
        <FlatList
          data={workoutById.workout}
          renderItem={renderExercise}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F9C2FF',
    height: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#6E3B6E',
    color: '#fff',
    padding: 25,
  },
});
export default ViewWorkout;
