const GetUser = require('../../../../Domain/UseCases/GetUser')

module.exports = {
  user: (_, { id }) => GetUser(id)
}
