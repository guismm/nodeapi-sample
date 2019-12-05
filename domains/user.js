const users = [
  {
    _id: 1,
    name: 'Guilherme Silveira Maia de Mendonça',
    age: 25
  },
  {
    _id: 2,
    name: 'João da Silva',
    age: 24
  }
];

module.exports.getUsers = () => {
  return users;
}

module.exports.getUserById = (id) => {
  return users.find(u => u._id.toString() === id.toString()) || { error: `The user with id ${id} does not exists.` };
}
