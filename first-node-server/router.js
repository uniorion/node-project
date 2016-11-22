var fs = require('fs'); // file system module
var renderer = require('./renderer');


module.exports = function(request, response) {
  var layoutName = null;
  var rq_url = request.url.toLowerCase();

  switch(rq_url) {
    case '/': layoutName = "home";
      break;
    case '/about': layoutName = "about";
      break;
    case '/fastcampus': layoutName = "fastcampus";
      break;
    default: layoutName = "err_404";
      break;
  }

  renderer(request, response, layoutName);
}

// module.exports.home = home;
// module.exports.about = about;
// module.exports.fastcampus = fastcampus;
// module.exports.err_404 = err_404;