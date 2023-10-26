const User = require('../models/user');
const BadRequestError = require('../errors/bad-request-error');
const NotFoundError = require('../errors/not-found-error');

// Возвращает информацию о пользователе.
module.exports.getUser = (req, res, next) => {
  const userId = req.user._id;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(`Пользователь с ID ${userId} не найден.`);
      }
      res.send({ data: user });
    })
    .catch(next);
};

// Обновляет информацию о пользователе.
module.exports.updateUser = (req, res, next) => {
  const userId = req.user._id;
  const { email, name } = req.body;

  User.findByIdAndUpdate(userId, { email, name }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFoundError(`Пользователь с ID ${userId} не найден.`);
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('В метод обновления пользователя переданы некорректные данные.'));
      } else {
        next(err);
      }
    });
};
