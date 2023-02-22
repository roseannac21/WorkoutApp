const request = require("supertest");
const { app } = require("../app");
const mongoose = require("mongoose");
const Exercise = require("../schemas/ExerciseSchema");
const { User } = require("../schemas/UserSchema");
const Categories = require("../schemas/CategoriesSchema");
const { exercises } = require("../data/exercises-data");
const { users } = require("../data/user-data");
const { categories } = require("../data/categories-data");
const database = require("../connection");;

// require('dotenv').config({
//   path: `${__dirname}/.env`,
// });

// const url = process.env.DATABASE_URL;

// console.log(url);

// mongoose.connect(url);
// const database = mongoose.connection;

beforeEach(async () => {
  await User.deleteMany();
  await User.collection.insertMany(users);
  await Exercise.deleteMany();
  await Exercise.collection.insertMany(exercises);
  await Categories.deleteMany();
  await Categories.collection.insertMany(categories);
});

afterAll(async () => {
  await database.close();
});

describe("GET /api/users", () => {
  test("should return all users", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body: { users } }) => {
        users.forEach((user) => {
          expect(user).toHaveProperty("username", expect.any(String));
          expect(user).toHaveProperty("password", expect.any(String));
          expect(user).toHaveProperty("_id", expect.any(Number));
          expect(user).toHaveProperty("avatar_url", expect.any(String));
        });
        expect(Array.isArray(users)).toBe(true);
      });
  });
});
describe("GET /api/exercises", () => {
  test("should return exercises", () => {
    return request(app)
      .get("/api/exercises")
      .expect(200)
      .then(({ body: { exercises } }) => {
        exercises.forEach((exercise) => {
          expect(exercise).toHaveProperty("_id", expect.any(Number));
          expect(exercise).toHaveProperty("name", expect.any(String));
          expect(exercise).toHaveProperty("type", expect.any(String));
          expect(exercise).toHaveProperty("muscle", expect.any(String));
          expect(exercise).toHaveProperty("equipment", expect.any(String));
          expect(exercise).toHaveProperty("difficulty", expect.any(String));
          expect(exercise).toHaveProperty("instructions", expect.any(String));
        });
        expect(Array.isArray(exercises)).toBe(true);
      });
  });
});
describe("GET /api/categories", () => {
  test("should return categories", () => {
    return request(app)
      .get("/api/categories")
      .expect(200)
      .then(({ body: { categories } }) => {
        categories.forEach((category) => {
          expect(category).toHaveProperty("category", expect.any(String));
          expect(category).toHaveProperty("_id", expect.any(String));
        });
      });
  });
});
describe("get exercise by ID", () => {
  test("status 200", () => {
    return request(app).get("/api/exercises/1").expect(200);
  });
  test("status 200 and returns the object of the exercise with the given ID", () => {
    return request(app)
      .get("/api/exercises/3")
      .expect(200)
      .then(({ body: { exercise } }) => {
        expect(exercise).toEqual({
          _id: 3,
          name: "Hammer Curls",
          type: "strength",
          muscle: "biceps",
          equipment: "dumbbell",
          difficulty: "intermediate",
          instructions:
            "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc.",
        });
      });
  });
  test('400: bad request, invalid id type', () => {
    return request(app)
      .get('/api/exercises/notAnId')
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe('Bad request: invalid _id type');
      });
  });
  test('404: nonexistent id', () => {
    return request(app)
      .get('/api/exercises/2000')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe('Not Found');
      });
  });
});
describe('GET /api/users/:_id', () => {
  test('should return user object', () => {
    return request(app)
      .get('/api/users/1')
      .expect(200)
      .then(({ body: { user } }) => {
        expect(user).toHaveProperty('username', expect.any(String));
        expect(user).toHaveProperty('password', expect.any(String));
        expect(user).toHaveProperty('avatar_url', expect.any(String));
      });
  });
  test('should return correct user', () => {
    return request(app)
      .get('/api/users/1')
      .expect(200)
      .then(({ body: { user } }) => {
        expect(user).toEqual({
          _id: 1,
          username: 'user1',
          password: 'PassWord!',
          avatar_url: '...',
        });
      });
  });
  test('400: bad request, invalid id type', () => {
    return request(app)
      .get('/api/users/notAnId')
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe('Bad request: invalid _id type');
      });
  });
  test('404: nonexistent id', () => {
    return request(app)
      .get('/api/users/2000')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe('Not Found');
      });
  });
});
