const { users } = require('../../../mockData')
module.exports = function getUser (id) {
  return id ? [users.find(user => user.id === Number(id))] : users
}
