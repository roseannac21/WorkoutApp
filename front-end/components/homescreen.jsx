import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState('');
  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setUsers(users);
    });
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      {/* <ScrollView
        style={{
          padding: 20,
        }}
      > */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Hello User
        </Text>
        <TouchableOpacity
          data={users}
          onPress={() => {
            navigation.navigate('User', {
              id: users.map((user) => {
                return user._id;
              }),
            });
          }}
        >
          <Image
            source={{
              uri: 'https://www.boris-johnson.org.uk/sites/www.boris-johnson.org.uk/files/2020-08/The%20Gym%20Group.jpg',
            }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 25,
              backgroundColor: '#0000',
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          borderColor: '#C6C6C6',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
      >
        <TextInput placeholder="Search" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 15,
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Exercises
        </Text>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
