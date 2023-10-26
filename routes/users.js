const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { getUser, updateUser } = require('../controllers/users');

// Возвращает информацию о пользователе.
router.get('/me', getUser);

// Обновляет информацию о пользователе.
router.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string().min(2).max(30),
  }),
}), updateUser);

module.exports = router;
