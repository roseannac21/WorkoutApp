import React from 'react';
import { Button} from 'react-native';
import {useState} from 'react';




const SignUpButton = ({navigation}) => {
    const [isPressed, setIsPressed] = useState(false)
    
    return  <Button
        onPress={() => 
        navigation.navigate('SignUpPage')}
        title={'Press Button To Sign Up'}>
        </Button>
}
export default SignUpButton