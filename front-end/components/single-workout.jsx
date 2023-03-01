import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
const SingleWorkout = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <View>
      <Text style={[styles.title, { color: textColor }]}>{item.name}</Text>
    </View>
    <View style={styles.spaceBetween}>
      <View style={styles.inline}>
        <Text style={[styles.subHeading, { color: textColor }]}>Muscle:</Text>
        <Text style={[styles.text, { color: textColor }]}>{item.muscle}</Text>
      </View>
      <View style={styles.inline}>
        <Text style={[styles.subHeading, { color: textColor }]}>
          Difficulty:
        </Text>
        <Text style={[styles.text, { color: textColor }]}>
          {item.difficulty}
        </Text>
      </View>
      <View style={styles.inline}>
        <Text style={[styles.subHeading, { color: textColor }]}>
          Equipment:
        </Text>
        <Text style={[styles.text, { color: textColor }]}>
          {item.equipment}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  subHeading: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop: 20,
  },
  inline: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default SingleWorkout;
