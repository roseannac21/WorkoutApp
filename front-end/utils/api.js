import axios from "axios";

const workoutAPI = axios.create({
  baseURL: "https://workout-app-ix1o.onrender.com/api",
});

export const getUsers = () => {
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
  return workoutAPI.post(`/users`, postBody).catch((error) => {
    console.log(error);
  });
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

export const postWorkout = (user_id, name, workout) => {
  const postBody = {
    name: name,
    user_id: user_id,
    workout: workout,
  };
  return workoutAPI
    .post(`/users/${user_id}/workouts`, postBody)
    .catch((error) => {
      console.log(error);
    });
};

export const getWorkouts = (user_id) => {
  return workoutAPI
  .get(`/users/${user_id}/workouts`)
  .then(({data}) => {
    return data.workouts
  })
}

export const getWorkoutsById = (user_id, workout_id) => {
  return workoutAPI
  .get(`/users/${user_id}/workouts/${workout_id}`)
  .then(({data}) => {
    return data.workouts
  })
}