import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

const Login = ({navigation}) => {
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
            style={{
              flex: 1,
              paddingVertical: 0,
            }}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          onPress={() => {}}
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
          onPress={() => {navigation.navigate('SignUp')}}
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
