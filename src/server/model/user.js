import { User } from '../lib/mongo'

export default {
  create (user) {
    return User.create(user).exec()
  },
  findUserByName (name) {
    return User.findOne({ uname: name }).addCreatedAt().exec()
  }
}
