import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import { Card } from "react-native-elements";

const SingleExercise = ({ exercise }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Card title="exercise card" key={exercise._id} containerStyle={styles.card}>
      <View style={styles.cardStyle}>
        <View>
          <Text style={[styles.title, { color: "#000000" }]}>
            {exercise.name}
          </Text>
        </View>
        <View style={styles.spaceBetween}>
          <View style={styles.inline}>
            <Text style={[styles.subHeading, { color: "#000000" }]}>
              Muscle:
            </Text>
            <Text style={[styles.text, { color: "#000000" }]}>
              {exercise.muscle}
            </Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.subHeading, { color: "#000000" }]}>
              Difficulty:
            </Text>
            <Text style={[styles.text, { color: "#000000" }]}>
              {exercise.difficulty}
            </Text>
          </View>
          <View style={styles.inline}>
            <Text style={[styles.subHeading, { color: "#000000" }]}>
              Equipment:
            </Text>
            <Text style={[styles.text, { color: "#000000" }]}>
              {exercise.equipment}
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            color={"#ffffff"}
            title="Press here for instructions"
            onPress={() => {
              isClicked ? setIsClicked(false) : setIsClicked(true);
            }}
          ></Button>
          <View />
          {isClicked ? (
            <Text style={styles.instructions}>{exercise.instructions}</Text>
          ) : (
            ""
          )}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
    fontSize: "large",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subInfo: {
    fontWeight: "normal",
    fontSize: "medium",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#F9C2FF",
    borderWidth: 0,
  },
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  subHeading: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginTop: 20,
  },
  inline: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#6E3B6E",
  },
  instructions: {
    color: "#ffffff",
    padding: 15,
  },
});
export default SingleExercise;
