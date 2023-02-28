import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import { getExerciseById } from "../utils/api";
import { Card } from "react-native-elements";

const SingleExercise = ({ navigation, route }) => {
  const [singleExercise, setSingleExercise] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const { exercise } = route.params;
  console.log(exercise);

  return (
    <Card title="exercise card" key={exercise._id}>
      <Text style={styles.titleText}>{exercise.name}</Text>
      <Text style={styles.subInfo}>Category: {exercise.type}</Text>
      <Text style={styles.subInfo}>Difficulty: {exercise.difficulty}</Text>
      <Text style={styles.subInfo}>Muscle worked: {exercise.muscle}</Text>
      <Button
        title="Press here for instructions"
        style={styles.subInfo}
        onPress={() => {
          isClicked ? setIsClicked(false) : setIsClicked(true);
        }}
      ></Button>
      {isClicked ? <Text>{exercise.instructions}</Text> : ""}
    </Card>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
    fontSize: "large",
    textAlign: "center",
  },
  subInfo: {
    fontWeight: "normal",
    fontSize: "medium",
    textAlign: "center",
  },
});
export default SingleExercise;
