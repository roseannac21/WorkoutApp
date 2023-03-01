import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation, route }) => {
  const { user, users } = route.params;

  const loggedInUser = users.filter((potentialUser) => {
    if (potentialUser.username === user) {
      return potentialUser;
    }
  });

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
            backgroundColor: "#87CEEB",
            margin: 5,
          }}
        >
          <Text style={{ color: "#fff" }}> Exercises </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Workout");
          }}
          style={{
            backgroundColor: "#87CEEB",
            margin: 5,
          }}
        >
          <Text style={{ color: "#fff" }}> Create a new workout </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
