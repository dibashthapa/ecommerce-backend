const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    fullName: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { versionKey: false }
);

UserSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.password;
    delete ret.token;
  },
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
