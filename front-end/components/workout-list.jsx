import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const WorkoutList = ({ item, onPress }) => (
  <View style={[styles.container]}>
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <View>
        <Text style={[styles.title, { color: '#fff', textAlign: 'center' }]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  item: {
    backgroundColor: '#6E3B6E',
    padding: 10,
    borderRadius: 5,
    marginBottom: 25,
    width: '60%',
  },
  title: {
    fontSize: 16,
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
    justifyContent: 'space-between',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default WorkoutList;
