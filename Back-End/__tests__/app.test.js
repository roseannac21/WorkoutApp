const request = require('supertest');
const { app } = require('../app');
const mongoose = require('mongoose');
const Exercise = require('../schemas/ExerciseSchema');
const { User } = require('../schemas/UserSchema');
const { exercises } = require('../data/exercises-data');
const { users } = require('../data/user-data');

require('dotenv').config({
  path: `${__dirname}/.env`,
});

const url = process.env.DATABASE_URL;

console.log(url);

mongoose.connect(url);
const database = mongoose.connection;

beforeEach(async () => {
  await User.deleteMany();
  await User.insertMany(users);
  await Exercise.deleteMany();
  await Exercise.insertMany(exercises);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /api/users', () => {
  test('should return all users', () => {
    return request(app)
      .get('/api/users')
      .expect(200)
      .then(({ body: { users } }) => {
        users.forEach((user) => {
          expect(user).toHaveProperty('username', expect.any(String));
          expect(user).toHaveProperty('password', expect.any(String));
          expect(user).toHaveProperty('_id', expect.any(String));
          expect(user).toHaveProperty('avatar_url', expect.any(String));
          expect(user).toHaveProperty('__v', expect.any(Number));
        });
        expect(Array.isArray(users)).toBe(true);
    });
});
});
describe('GET /api/exercises', () => {
  test('should return exercises', () => {
    return request(app)
      .get('/api/exercises')
      .expect(200)
      .then(({ body: { exercises } }) => {
        exercises.forEach((exercise) => {
          expect(exercise).toHaveProperty('_id', expect.any(String));
          expect(exercise).toHaveProperty('name', expect.any(String));
          expect(exercise).toHaveProperty('type', expect.any(String));
          expect(exercise).toHaveProperty('muscle', expect.any(String));
          expect(exercise).toHaveProperty('equipment', expect.any(String));
          expect(exercise).toHaveProperty('difficulty', expect.any(String));
          expect(exercise).toHaveProperty('instructions', expect.any(String));
          expect(exercise).toHaveProperty('__v', expect.any(Number));
        });
        expect(Array.isArray(exercises)).toBe(true)
      });
  });
});
