const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { signUp, signIn } = require('../controllers/auth');

// Регистрация.
router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
}), signUp);

// Авторизация.
router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), signIn);

module.exports = router;
