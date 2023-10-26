const { CREATED } = require('../utils/constants');
const Movie = require('../models/movie');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');
const NotFoundError = require('../errors/not-found-error');

// Возвращает все сохраненные текущим пользователем фильмы.
module.exports.getMovies = (req, res, next) => {
  const userId = req.user._id;

  Movie.find({ owner: userId })
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

// Создаёт фильм в сохраненных.
module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const userId = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: userId,
  })
    .then((movie) => res.status(CREATED).send({ data: movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('В метод создания фильма переданы некорректные данные.'));
      } else {
        next(err);
      }
    });
};

// Удаляет сохраненный фильм по id.
module.exports.removeMovie = (req, res, next) => {
  const { movieId } = req.params;
  const userId = req.user._id;

  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(`Фильм с ID ${movieId} не найден.`);
      }

      if (!movie.owner.equals(userId)) {
        throw new ForbiddenError('Можно удалять только свои сохраненные фильмы.');
      }

      Movie.deleteOne(movie)
        .then(res.send({ data: movie }))
        .catch(next);
    })
    .catch(next);
};
