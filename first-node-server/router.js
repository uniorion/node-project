var fs = require('fs'); // file system module


function home(request, response) {
  fs.readFile("./layout/home.html", function(err, data) {
    response.write(data);
    response.end();
  });
}

function about(request, response) {
  fs.readFile("./layout/about.html", function(err, data) {
    response.write(data);
    response.end();
  });
}

function fastcampus(request, response) {
  fs.readFile("./layout/fastcampus.html", function(err, data) {
    response.write(data);
    response.end();
  });
}

function err_404(request, response) {
  fs.readFile("./layout/err_404.html", function(err, data) {
    response.write(data);
    response.end();
  });
}

module.exports.home = home;
module.exports.about = about;
module.exports.fastcampus = fastcampus;
module.exports.err_404 = err_404;