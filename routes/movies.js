const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { getMovies, createMovie, removeMovie } = require('../controllers/movies');
const { validateID, validateURL } = require('../utils/validators');

// Возвращает все сохраненные текущим пользователем фильмы.
router.get('/', getMovies);

// Создаёт фильм в сохраненных.
router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(validateURL),
    trailer: Joi.string().required().custom(validateURL),
    thumbnail: Joi.string().required().custom(validateURL),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovie);

// Удаляет сохраненный фильм по id.
router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().custom(validateID),
  }),
}), removeMovie);

module.exports = router;
