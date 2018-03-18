module.exports = global => {
  require('./helpers/go-to')(global);
  require('./helpers/select')(global);
  require('./helpers/sleep')(global);
};
