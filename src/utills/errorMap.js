const errorMap = {
  USER_NOT_FOUND: 404,
  EMPTY_VALUE: 400,
  INVALID_VALUE: 422,
  EXISTING_USER_CONFLICT: 409,
  USER_NOT_REGISTER: 501,
  S_NOT_FOUND: 404,

};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
