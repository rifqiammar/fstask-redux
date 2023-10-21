module.exports = function errorhandling(status, message, data = "") {
  return { data, status, message };
};
