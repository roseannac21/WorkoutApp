const request = require("supertest");
const { app } = require("../app");
const mongoose = require("mongoose");
const Exercise = require("../schemas/ExerciseSchema");
const User = require("../schemas/UserSchema");
const Categories = require("../schemas/CategoriesSchema");
const Counters = require("../schemas/CountersSchema");
const { exercises } = require("../data/test-data/test-exercises-data");
const { users } = require("../data/test-data/test-user-data");
const { categories } = require("../data/test-data/test-categories-data");
const { database } = require("../connection");
const url = process.env.DATABASE_URL;

beforeEach(async () => {
  await mongoose.connect(url);
  await User.deleteMany();
  await User.collection.insertMany(users);
  await Exercise.deleteMany();
  await Exercise.collection.insertMany(exercises);
  await Categories.deleteMany();
  await Categories.collection.insertMany(categories);

  await Counters.deleteMany();
});

afterAll(async () => {
  await database.close();
});
jest.setTimeout(15000);

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
describe("GET /api/users/:_id", () => {
  test("should return user object", () => {
    return request(app)
      .get("/api/users/0")
      .expect(200)
      .then(({ body: { user } }) => {
        expect(user).toHaveProperty("username", expect.any(String));
        expect(user).toHaveProperty("password", expect.any(String));
        expect(user).toHaveProperty("avatar_url", expect.any(String));
      });
  });
  test("should return correct user", () => {
    return request(app)
      .get("/api/users/0")
      .expect(200)
      .then(({ body: { user } }) => {
        expect(user).toEqual({
          _id: 0,
          username: "testuser1",
          password: "testPassWord!",
          avatar_url: "...",
        });
      });
  });
  test("400: bad request, invalid id type", () => {
    return request(app)
      .get("/api/users/notAnId")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("Bad request: invalid _id type");
      });
  });
  test("404: nonexistent id", () => {
    return request(app)
      .get("/api/users/2000")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not Found");
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
          name: "Landmine twist",
          type: "strength",
          muscle: "abdominals",
          equipment: "other",
          difficulty: "intermediate",
          instructions:
            "Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete.",
        });
      });
  });
  test("400: bad request, invalid id type", () => {
    return request(app)
      .get("/api/exercises/notAnId")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("Bad request: invalid _id type");
      });
  });
  test("404: nonexistent id", () => {
    return request(app)
      .get("/api/exercises/2000")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not Found");
      });
  });
});

describe("post user /api/users", () => {
  test("returns correct posted user", () => {
    const newUser = {
      username: "user2",
      password: "helloWorld",
      avatar_url: "....",
    };

    return request(app)
      .post("/api/users")
      .send(newUser)
      .expect(201)
      .then(({ body: { userAdded } }) => {
        expect(userAdded).toEqual({
          username: "user2",
          password: "helloWorld",
          avatar_url: "....",
          _id: 1,
          __v: 0,
        });
      });
  });
});
describe("delete user by id", () => {
  test("deletes user with given id", () => {
    return request(app).delete("/api/users/0").expect(204);
  });
  test("404 error: non existant ID", () => {
    return request(app)
      .delete("/api/users/99999")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not Found");
      });
  });
  test("400 error: invalid user ID - string", () => {
    return request(app)
      .delete("/api/users/hello")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("Invalid ID type");
      });
  });
});
describe("patch user", () => {
  test("status 200 and user info is successfully updated", () => {
    const userToPatch = {
      username: "testuser1",
      password: "testPassWord!",
      avatar_url: "newAvatar",
    };
    return request(app)
      .patch("/api/users/0")
      .send(userToPatch)
      .expect(200)
      .then(({ body: { updated } }) => {
        expect(updated).toEqual({
          _id: 0,
          username: "testuser1",
          password: "testPassWord!",
          avatar_url: "newAvatar",
        });
      });
  });
  test("status 404 error", () => {
    const userToPatch = {
      username: "testuser1",
      password: "testPassWord!",
      avatar_url: "testToFail",
    };
    return request(app)
      .patch("/api/users/999")
      .send(userToPatch)
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("User ID doesn't exist");
      });
  });
  test("status 400 error", () => {
    const userToPatch = {
      username: "testuser1",
      password: "testPassWord!",
      avatar_url: "testToFail",
    };
    return request(app).patch("/api/users/hello").send(userToPatch).expect(400);
  });
});
describe("filter exercises by musclegroup- queries", () => {
  test("status 200 and exercises are filtered by given muscle group", () => {
    return request(app)
      .get("/api/exercises?muscle=biceps")
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
  test("testing another muscle group", () => {
    return request(app)
      .get("/api/exercises?muscle=quadriceps")
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
  test("400 error", () => {
    return request(app)
      .get("/api/exercises?muscle=hello")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("this muscle does not exist on the database");
      });
  });
});
describe("filter exercises by difficulty- queries", () => {
  test("200, and exercises are filtered by given difficulty", () => {
    return request(app)
      .get("/api/exercises?difficulty=beginner")
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
        expect(exercises).toHaveLength(10);
      });
  });
  test("400 error", () => {
    return request(app)
      .get("/api/exercises?difficulty=hello")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe(
          "this difficulty level does not exist on the database"
        );
      });
  });
});
