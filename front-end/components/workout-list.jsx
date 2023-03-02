import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const WorkoutList = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={ onPress } style={[styles.item]}>
    <View>
      <Text style={[styles.title, { color: textColor }]}>{item.name}</Text>
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

export default WorkoutList;
