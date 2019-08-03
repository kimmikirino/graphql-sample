const CreateUser = require('../../../../Domain/UseCases/CreateUser')

module.exports = {
  createUser: (_, user) => CreateUser(user)
}
