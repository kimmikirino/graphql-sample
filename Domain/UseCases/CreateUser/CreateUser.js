const { users } = require('../../../mockData')
module.exports = async function createUser ({ name, lastName }) {
  const lastId = users[users.length-1].id
  const newUser = {
    id: lastId + 1,
    name,
    lastName
  }
  users.push(newUser)
  return newUser
}
