module.exports = function(app) {
  app.get(['/', '/index.html'], function(req, res) {
    res.render("index.html");
  });
};