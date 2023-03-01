import { Text } from "react-native-elements"

const ExerciseInWorkout = ({item}) => {
    return (
        <Text>
            {item.exercise}
        </Text>
    )
}

export default ExerciseInWorkout