const errorMap = {
  USER_NOT_FOUND: 404,
  EMPTY_VALUE: 400,
  INVALID_VALUE: 400,
  EXISTING_USER_CONFLICT: 409,
  USER_NOT_REGISTER: 501,
  POST_NOT_EXIST: 404,
  CATEGORY_NOT_FOUND: 400,

};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
