# G.Y.M. GET YOURSELF MOVING, A WORKOUT PLANNING APP

Team Helter Svelter's final project on the Northcoders Coding Bootcamp ~ November 2022 cohort.

## App functionality for the user

As a user, you can sign up for an account and then login, taking you to the app's homescreen. Here, there are buttons to view the list of exercises and to create a new workout. A user's saved workouts are listed here on the homescreen. When viewing the exercise list, the user is able to filter the exercises by difficulty, helping to cater suggestions to the user's capabilities.

## The code

Using third-party data sourced from API Ninja's Exercises API ([https://api-ninjas.com/api/exercises]()), we created our own API using JavaScript, Node.js, Express, MongoDB and Mongoose.

To make our mobile app, we used Javascript with React Native and Expo Go.

Link to the hosted back-end: [https://workout-app-ix1o.onrender.com](). The available endpoints are:

### GET endpoints:

- /api/users
- /api/exercises
- /api/categories
- /api/users/:\_id
- /api/exercises/:\_id
- /api/users/:\_id/workouts
- /api/users/:user_id/workouts/:workout_id

### POST endpoints:

- /api/users
- /api/users/:user_id/workouts

### PATCH endpoints:

- /api/users/:\_id

### DELETE endpoints:

- /api/users/:user_id
- /api/users/:user_id/workouts/:workout_id

## Interacting with the app

To have a go with the app, start by cloning the repo and install the Expo Go app onto your smartphone.

- Go into the back-end and front-end directories and run `npm install` in each, in order to install all the necessary dependencies.
- From within the front-end directory, run `npx expo start`. Scan the QR code, which should then redirect you to Expo Go app, opening up G.Y.M.
- Have fun!
