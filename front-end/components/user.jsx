import { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getUserById } from '../utils/api';

const User = ({ route }) => {
  const { id } = route.params;
  const [userById, setUserById] = useState('');

  useEffect(() => {
    getUserById(id).then((user) => {
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
