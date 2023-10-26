const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const isEmail = require('validator/lib/isEmail');

const UnauthorizedError = require('../errors/unauthorized-error');

const userSchema = new mongoose.Schema({
  // email — почта пользователя, по которой он регистрируется.
  email: {
    type: String,
    validate: {
      validator: (email) => isEmail(email),
    },
    unique: true,
    required: true,
  },
  // password — хеш пароля.
  password: {
    type: String,
    required: true,
    select: false,
  },
  // name — имя пользователя.
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Неправильные почта или пароль.');
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError('Неправильные почта или пароль.');
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
