import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Form,
} from 'react-native';
import { useEffect, useState } from 'react';
import { getUserById, getUsers } from '../utils/api';

const Login = ({ navigation, route }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [userById, setUserById] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}
    >
      <ScrollView
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <Image
            source={{
              uri: 'https://c4.wallpaperflare.com/wallpaper/695/308/1005/d-grass-paw-caine-wallpaper-preview.jpg',
            }}
            style={{
              width: 375,
              height: 200,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingVertical: 20,
            }}
          >
            Log In
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 8,
            margin: 10,
          }}
        >
          <TextInput
            placeholder="Username"
            onChangeText={(text) => setUser(text)}
            style={{
              flex: 1,
              paddingVertical: 0,
            }}
            keyboardType="default"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 8,
            margin: 10,
          }}
        >
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPass(text)}
            style={{
              flex: 1,
              paddingVertical: 0,
            }}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          title="Submit"
          onPress={() => {
            getUsers().then((users) => {
              const correctUser = users.filter((user1) => {
                return user1.username === user;
              });
              console.log(correctUser[0]);
              setUserById(correctUser[0]);
            });
            if (userById.username === user && userById.password === pass) {
              navigation.navigate('HomeScreen');
            } else if (
              userById.username !== user ||
              userById.password !== pass
            ) {
              alert('Username or Password not recognised!');
            }
          }}
          style={{
            backgroundColor: '#87CEEB',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            margin: 5,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            New here? Register below
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={{
            backgroundColor: '#87CEEB',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            margin: 5,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
