const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  // country — страна создания фильма.
  country: {
    type: String,
    required: true,
  },
  // director — режиссёр фильма.
  director: {
    type: String,
    required: true,
  },
  // duration — длительность фильма.
  duration: {
    type: Number,
    required: true,
  },
  // year — год выпуска фильма.
  year: {
    type: String,
    required: true,
  },
  // description — описание фильма.
  description: {
    type: String,
    required: true,
  },
  // image — ссылка на постер к фильму.
  image: {
    type: String,
    validate: {
      validator: (image) => isURL(image),
    },
    required: true,
  },
  // trailerLink — ссылка на трейлер фильма.
  trailer: {
    type: String,
    validate: {
      validator: (trailer) => isURL(trailer),
    },
    required: true,
  },
  // thumbnail — миниатюрное изображение постера к фильму.
  thumbnail: {
    type: String,
    validate: {
      validator: (thumbnail) => isURL(thumbnail),
    },
    required: true,
  },
  // owner — _id пользователя, который сохранил фильм.
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  // movieId — id фильма, который содержится в ответе сервиса MoviesExplorer.
  movieId: {
    type: Number,
    required: true,
  },
  // nameRU — название фильма на русском языке.
  nameRU: {
    type: String,
    required: true,
  },
  // nameEN — название фильма на английском языке.
  nameEN: {
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
