import axios from "axios"

const workoutAPI = axios.create({
  baseURL: 'https://workout-app-93fn.onrender.com/api',
});

export const getUsers = () => {
    return workoutAPI
    .get(`/users`)
    .then(({data}) => {
        return data.users
    })
}

export const getUserById = (id) => {
    return workoutAPI
    .get(`/users/${id}`)
    .then(({data}) => {
        return data.user
    })
}