import React from 'react';
import { Button} from 'react-native';
import {useState} from 'react'


const SignUp = () => {
    const [isPressed, setIsPressed] = useState(false)
    
    return <Button 
        onPress={() => {
            setIsPressed(true);}}
        disabled={isPressed} title={isPressed ? 'AHA, YOU FOOL! The Button Does Not Do Anything!' : 'Press Button To Sign Up'} />
}
export default SignUp