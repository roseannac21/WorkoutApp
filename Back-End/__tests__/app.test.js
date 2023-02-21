const request = require("supertest");
const { app } = require("../app");
const mongoose = require("mongoose");
const Exercise = require("../schemas/ExerciseSchema");
const { User } = require("../schemas/UserSchema");
const Categories = require("../schemas/CategoriesSchema");
const { exercises } = require("../data/exercises-data");
const { users } = require("../data/user-data");
const { categories } = require("../data/categories-data");
const database = require("../connection");

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
          expect(user).toHaveProperty("_id", expect.any(String));
          expect(user).toHaveProperty("avatar_url", expect.any(String));
        });
        expect(Array.isArray(users)).toBe(true);
      });
  });
  test("error handling- 404", () => {
    return request(app).get("/api/usersssss").expect(404);
  });
});
describe("GET /api/exercises", () => {
  test("should return exercises", () => {
    return request(app)
      .get("/api/exercises")
      .expect(200)
      .then(({ body: { exercises } }) => {
        exercises.forEach((exercise) => {
          expect(exercise).toHaveProperty("_id", expect.any(String));
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
  test("error handling- 404", () => {
    return request(app).get("/api/exercisessss").expect(404);
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
  test("error handling- 404", () => {
    return request(app).get("/api/categoriessss").expect(404);
  });
});
describe("post user /api/users", () => {
  test("returns status 200", () => {
    return request(app).post("/api/users").expect(201);
  });
  test("user object is added to users collection", () => {
    return request(app)
      .post("/api/users")
      .expect(201)
      .then(({ body: { user } }) => {
        expect(user.acknowledged).toBe(true);
        expect(user).toHaveProperty("insertedId", expect.any(String));
      });
  });
  test("error handling- 404", () => {
    return request(app).post("/api/usersss").expect(404);
  });
});
