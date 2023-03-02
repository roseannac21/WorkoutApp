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
        backgroundColor: '#F9C2FF',
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f' }}>
          GET YOURSELF MOVING
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#20315f',
            textAlign: 'center',
            marginTop: 15,
          }}
        >
          (G.Y.M)
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
            url: 'https://t4.ftcdn.net/jpg/02/43/13/15/360_F_243131531_jmNppYX9Ux2Hj2RV9yYR1swicwcYr8EQ.jpg',
          }}
          style={{
            width: 400,
            height: 400,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('LogIn')}
        style={{
          backgroundColor: '#6E3B6E',
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
          backgroundColor: '#6E3B6E',
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
    </SafeAreaView>
  );
};

export default Welcome;
