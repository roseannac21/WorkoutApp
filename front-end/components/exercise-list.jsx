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
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getAllExercises(filter).then((data) => {
      setExercises(data.exercises);
      setIsLoading(false);
    });
  }, [filter]);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text>Warming up...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.exercises}>
      <Text style={styles.filterHeader}>Filter by difficulty</Text>
      <View style={styles.inline}>
        <View
          style={styles.beginnerButton}
          backgroundColor={filter === "beginner" ? "#F9C2FF" : "#ffffff"}
        >
          <Button
            color={"#6E3B6E"}
            title="Beginner"
            onPress={() => {
              filter !== "beginner" ? setFilter("beginner") : setFilter("");
            }}
          ></Button>
        </View>
        <View
          style={styles.interButton}
          backgroundColor={filter === "intermediate" ? "#F9C2FF" : "#ffffff"}
        >
          <Button
            color={"#6E3B6E"}
            title="Intermediate"
            onPress={() => {
              filter !== "intermediate"
                ? setFilter("intermediate")
                : setFilter("");
            }}
          ></Button>
        </View>
        <View
          style={styles.adButton}
          backgroundColor={filter === "advanced" ? "#F9C2FF" : "#ffffff"}
        >
          <Button
            color={"#6E3B6E"}
            title="Advanced"
            onPress={() => {
              filter !== "advanced" ? setFilter("advanced") : setFilter("");
            }}
          ></Button>
        </View>
      </View>
      {exercises.map((exercise) => {
        return <SingleExercise exercise={exercise} key={exercise._id} />;
      })}
    </ScrollView>
  );
};

// const begButtonBackground = filter === "beginner" ? "#F9C2FF" : "#000000";

const styles = StyleSheet.create({
  exercises: {
    backgroundColor: "#ffffff",
  },
  loading: {
    alignItems: "center",
    fontSize: "large",
    fontStyle: "bold",
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  filterHeader: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#6E3B6E",
  },
  beginnerButton: {
    borderColor: "#F9C2FF",
    borderWidth: 3,
    borderRadius: 5,
  },
  interButton: {
    borderColor: "#F9C2FF",
    borderWidth: 3,
    borderRadius: 5,
  },
  adButton: {
    borderColor: "#F9C2FF",
    borderWidth: 3,
    borderRadius: 5,
  },
});

export default ExerciseList;
