import { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getUserById } from '../utils/api';

const User = ({ route }) => {
  const { id } = route.params;
  const [userById, setUserById] = useState('');
  console.log(userById, '<-- USER BY ID');
  console.log(id, '<-- Id??');

  useEffect(() => {
    getUserById(id).then((user) => {
      console.log(id)
      console.log(user, "<-- USER")
      setUserById(user);
    });
  }, [id]);

  return (
    <SafeAreaView>
      <Text>Am I Visable? {userById.username}</Text>
    </SafeAreaView>
  );
};

export default User;
