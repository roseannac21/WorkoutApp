import axios from "axios"

const workoutAPI = axios.create({
  baseURL: 'https://workout-app-93fn.onrender.com/api',
});