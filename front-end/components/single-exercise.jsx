import React from "react";
import { Text } from "react-native";
import { useState, useEffect } from "react";
import { getExerciseById } from "../utils/api";
const SingleExercise = ({ navigation, route }) => {
  const [singleExercise, setSingleExercise] = useState({});
  const { id } = route.params;
  console.log(route.params);
  getExerciseById(id).then((data) => {
    setSingleExercise(data.exercise);
  }, []);
  return (
    <Text>
      Hello World!
      {singleExercise.name}
      {singleExercise.difficulty}
      {singleExercise.type}
      {singleExercise.muscle}
      {singleExercise.description}
    </Text>
  );
};
export default SingleExercise;
