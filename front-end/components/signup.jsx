import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { postUser } from '../utils/api';

const SignUp = ({ navigation }) => {
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newAvatar, setNewAvatar] = useState('');
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
              uri: 'https://media.istockphoto.com/id/670051268/photo/people-at-the-gym-talking-to-the-receptionist.jpg?s=612x612&w=0&k=20&c=aD_wBFo5gWOdUhjvZo4mLXFde3__6e8S0lkMqdTKFOg=',
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
            Sign Up
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
            onChangeText={(user) => {
              setNewUser(user);
            }}
            placeholder="Username"
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
            onChangeText={(password) => {
              setNewPassword(password);
            }}
            placeholder="Password"
            style={{
              flex: 1,
              paddingVertical: 0,
            }}
            secureTextEntry={true}
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
            onChangeText={(avatar) => {
              setNewAvatar(avatar);
            }}
            placeholder="Avatar URL"
            style={{
              flex: 1,
              paddingVertical: 0,
            }}
            keyboardType="default"
          />
        </View>

        <TouchableOpacity
          title="Submit"
          onPress={() => {
            postUser(newUser, newPassword, newAvatar)
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
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            Already have an account? Sign in below
          </Text>
        </View>

        <TouchableOpacity
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
            Log in
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
