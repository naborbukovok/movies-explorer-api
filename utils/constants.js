const SECRET_KEY = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev-secret';
const BAD_REQUEST = 400;
const CONFLICT = 409;
const CREATED = 201;
const FORBIDDEN = 403;
const INTERNAL_SERVER_ERROR = 500;
const NOT_FOUND = 404;
const UNAUTHORIZED = 401;

module.exports = {
  SECRET_KEY,
  BAD_REQUEST,
  CONFLICT,
  CREATED,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNAUTHORIZED,
};
