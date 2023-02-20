import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import SignUp from './sign-up';
import { Link } from "react-router-native";


const HomePage = () => {
  return (
  <ScrollView contentContainerStyle={styles.container}>
  <View style={styles.container}>
      <Text> START YOUR FITNESS JOURNEY</Text>
      <Image source={{uri: 'https://www.boris-johnson.org.uk/sites/www.boris-johnson.org.uk/files/2020-08/The%20Gym%20Group.jpg' }}
      style={{width: 200, height:200}}></Image>
      <Text> Create an account below and begin your fitness journey...</Text>
    
      
      <StatusBar style="auto" />
    
  
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
export default HomePage
