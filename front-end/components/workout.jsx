import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import { getAllExercises } from '../utils/api';
import { Card } from 'react-native-elements';
import SingleWorkout from './single-workout';

const Workout = ({ navigation }) => {
  const [allExercises, setAllExercises] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedExcercises = await getAllExercises();
      setAllExercises(fetchedExcercises.exercises);
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item._id === selectedId ? '#6E3B6E' : '#F9C2FF';
    const color = item._id === selectedId ? '#fff' : '#000';

    return (
      <SingleWorkout
        item={item}
        onPress={() => {
          setSelectedId(item._id);
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
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 10,
        }}
      >
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            Name Your Workout
          </Text>
          <TextInput
            style={{
              borderColor: '#C6C6C6',
              borderWidth: 0.5,
              textAlign: 'center'
            }}
            placeholder="Name your workout"
          ></TextInput>
        </View>
      </View>

      <FlatList
        data={allExercises}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={selectedId}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Workout;
