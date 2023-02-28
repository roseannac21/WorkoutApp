import axios from 'axios';

const workoutAPI = axios.create({
  baseURL: 'https://workout-app-93fn.onrender.com/api'
});

export const getUsers = () => {
  console.log('getting users ...')
  return axios
    .get(`https://workout-app-ix1o.onrender.com/api/users`)
    .then(({ data }) => {
      return data.users;
    });
};

export const getUserById = (id) => {
  return workoutAPI.get(`/users/${id}`).then(({ data }) => {
    return data.user;
  });
};

export const postUser = (username, password, avatar_url) => {
  const postBody = {
    username: username,
    password: password,
    avatar_url: avatar_url,
  };
  return workoutAPI.post(`/users`, postBody);
};

export function getAllExercises() {
  return axios
    .get("https://workout-app-ix1o.onrender.com/api/exercises")
    .then(({ data }) => {
      return data;
    });
}
export function getExerciseById(id) {
  return axios
    .get(`https://workout-app-ix1o.onrender.com/api/exercises/${id}`)
    .then(({ data }) => {
      return data;
    });
}
