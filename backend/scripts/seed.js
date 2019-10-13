const User = require('../../backend/models/user');
const Sort = require('../../backend/models/sort');
const faker = require('faker');
const path = require('path');
const fs = require('fs-extra');

const users = [
  {
    name: "test",
    email: 'admin@test.com',
    password: 'test1234',
    role: 'admin',
  },
  {
    name: faker.name.firstName(),
    email: 'user@test.com',
    password: 'test1234',
  },
];

exports.users = async () => {
  await User.deleteMany({});
  await new User(users[0]).save();
  await new User(users[1]).save();
};

exports.items = async () => {
  await Item.deleteMany({});
  const file = await fs.readFile(
    path.join(__dirname, 'seed_data.json'),
    'utf8',
  );
  const items = JSON.parse(file);
  return Item.insertMany(items);
};

exports.sorts = async () => {
  await Sort.deleteMany({});
  const file = await fs.readFile(
    path.join(__dirname, 'seed_sort_data.json'),
    'utf8',
  );
  const sorts = JSON.parse(file);
  return Sort.insertMany(sorts);
};

exports.recipes = async () => {
  await Recipe.deleteMany({});
  const file = await fs.readFile(
    path.join(__dirname, 'seed_recipe.json'),
    'utf8',
  );
  const recipes = JSON.parse(file);
  return Recipe.insertMany(recipes);
};
