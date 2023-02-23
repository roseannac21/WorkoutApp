import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <ScrollView
        style={{
          padding: 20,
        }}
      >
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
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <TextInput placeholder="Search" />
        </View>

        <TouchableOpacity
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
            Sign In
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
