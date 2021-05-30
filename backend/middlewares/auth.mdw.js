// eslint-disable-next-line func-names
module.exports = function (app) {
  // eslint-disable-next-line global-require
  app.use('/demo', require('../routes/demo.route'));
};
