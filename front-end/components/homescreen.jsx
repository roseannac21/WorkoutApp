import { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { getWorkouts } from "../utils/api";
import WorkoutList from "./workout-list";

const HomeScreen = ({ navigation, route }) => {
  const { user, users, id } = route.params;
  const [workoutList, setWorkoutList] = useState([]);
  const [workoutId, setWorkoutId] = useState(null);

  const loggedInUser = users.filter((potentialUser) => {
    if (potentialUser.username === user) {
      return potentialUser;
    }
  });

  useEffect(() => {
    async function fetchData() {
      const fetchedWorkouts = await getWorkouts(id);
      setWorkoutList(fetchedWorkouts);
    }
    fetchData();
  }, [workoutList]);

  useEffect(() => {
    if (workoutId) {
      navigation.navigate("ViewWorkout", {
        workoutID: workoutId,
        userId: id,
      });
    }
  }, [workoutId]);

  useEffect(() => {
    const resetWorkoutIdState = navigation.addListener("focus", () => {
      setWorkoutId(null);
    });
    return resetWorkoutIdState;
  }, [navigation]);


  const renderItem = ({ item }) => {
    return (
      <WorkoutList
        item={item}
        onPress={() => {
          setWorkoutId(item._id);
        }}
      />
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9C2FF',

      }}
    >
      <ScrollView
        scrollEnabled={true}
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              padding: 30,
            }}
          >
            Hello {user}!
          </Text>
          <Image
            source={{
              url: loggedInUser[0].avatar_url,
            }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 25,
              backgroundColor: "#0000",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 15,
          }}
        ></View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ExerciseList");
          }}
          style={{
            backgroundColor: '#6E3B6E',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            margin: 5,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            {' '}
            View All Exercises{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Workout", { id: id });
          }}
          style={{
            backgroundColor: '#6E3B6E',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            margin: 5,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            {' '}
            Create a New Workout{' '}
          </Text>

        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 20,
              textDecorationLine: 'underline',
              marginBottom: 20
            }}
          >
            Previous Workouts
          </Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={workoutList}
          renderItem={renderItem}
        ></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
