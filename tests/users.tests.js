const test = require('ava');
const UserDomain = require('../domains/user');

test('getUserById - success', t => {
  const user = UserDomain.getUserById(1);
  t.is(user.name, 'Guilherme Silveira Maia de Mendonça');
  t.is(user._id, 1);
  t.is(user.age, 25);
});

test('getUserById - fail', t => {
  const user = UserDomain.getUserById(3);
  t.is(user.error, 'The user with id 3 does not exists.');
});

test('getUsers', t => {
  const users = UserDomain.getUsers();
  t.is(users.length, 2);
});