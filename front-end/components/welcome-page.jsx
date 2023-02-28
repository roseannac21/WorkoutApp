import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f' }}>
          Welcome
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            url: 'https://www.boris-johnson.org.uk/sites/www.boris-johnson.org.uk/files/2020-08/The%20Gym%20Group.jpg',
          }}
          style={{
            width: 400,
            height: 400,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('LogIn')
        }
        style={{
          backgroundColor: '#87CEEB',
          padding: 20,
          width: '50%',
          borderRadius: 5,
          flexDirection: 'row,',
          alignItems: 'center',
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={{
          backgroundColor: '#87CEEB',
          padding: 20,
          width: '50%',
          borderRadius: 5,
          flexDirection: 'row,',
          alignItems: 'center',
          marginBottom: 50,
          margin: -25,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      >
        <Text>Homescreen Test DELETE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
