import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { getAllExercises } from "../api";
import { useState, useEffect } from "react";
const ExerciseList = ({ navigation, route }) => {
  const [exercises, setExercises] = useState([]);
  const [singleExerciseId, setSingleExerciseId] = useState({});
  useEffect(() => {
    getAllExercises().then((data) => {
      setExercises(data.exercises);
    });
  }, []);
  return (
    <ScrollView>
      {exercises.map((exercise) => {
        return (
          <Button
            onPress={() => {
              setSingleExerciseId(exercise._id);
              navigation.navigate("SingleExercise", {
                id: singleExerciseId,
              });
            }}
            title={exercise.name}
            key={exercise.name}
          />
        );
      })}
    </ScrollView>
  );
};
export default ExerciseList;
