import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { getAllExercises } from "../utils/api";
import { useState, useEffect } from "react";
import SingleExercise from "./single-exercise";
const ExerciseList = ({ navigation, route }) => {
  const [exercises, setExercises] = useState([]);
  const [singleExerciseId, setSingleExerciseId] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllExercises().then((data) => {
      setExercises(data.exercises);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <Text>Warming up...</Text>;
  }
  return (
    <ScrollView>
      {exercises.map((exercise) => {
        return <SingleExercise exercise={exercise} key={exercise._id} />;
      })}
    </ScrollView>
  );
};

export default ExerciseList;
