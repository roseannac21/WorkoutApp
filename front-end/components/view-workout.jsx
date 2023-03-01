import { useState } from 'react'
import { useEffect } from 'react'
import {Text} from 'react-native'
import { getWorkoutsById } from '../utils/api'

const ViewWorkout = ({route}) => {
const [workoutById, setWorkoutById] = useState([])
console.log(workoutById, "<-- WRKOUT")

const {workoutID, userId} = route.params
useEffect(() => {
  async function fetchData() {
    const fetchedWorkoutsById = await getWorkoutsById(userId, workoutID);
    setWorkoutById(fetchedWorkoutsById);
  }
  fetchData();
}, []);

    return (
        <Text>Hello </Text>
    )
}

export default ViewWorkout