import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, TextInput, Text } from "react-native";
import { getAllExercises } from "../utils/api";
import { Card, ListItem } from "react-native-elements";

const Workout = ({ navigation }) => {
  const [allExercises, setAllExercises] = useState([]);

  //   console.log(allExercises);
  useEffect(() => {
    async function fetchData() {
      const fetchedExcercises = await getAllExercises();
      setAllExercises(fetchedExcercises.exercises);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <TextInput placeholder="Name your workout"></TextInput>
        </View>

        <Card>
          {allExercises.map((exercise, i) => {
            // return <Text> {exercise.name}</Text>;
            return (
              <ListItem
                key={i}
                onPress={() => {}}
                containerStyle={{
                  backgroundColor: isPressed ? "#87CEEB" : "white",
                }}
                bottomDivider
              >
                <Text
                //   style={{ backgroundColor: isPressed ? "#87CEEB" : "#fff" }}
                >
                  {exercise.name}
                </Text>
              </ListItem>
            );
          })}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Workout;
