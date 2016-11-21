var http    = require('http');
var router  = require('./router');


var app = http.createServer(function(request, response){
	// response.writeHead(200, {'Content-Type':'text/plain'});
	// response.write("Hello NodeJS World~~");
	// response.end();
  console.log(request.url);

  // if ( request.url === "/" ) {
  //   // root일 경우에만 출력
  //   response.write("This is HOME!!!!!!!!");
  // }

  // var detailId = request.url.replace("/", "");
  // if ( detailId.length > 0 ) {
  //   response.write(detailId);
  // }
  
  var rq_url = request.url.toLowerCase();

  switch(rq_url) {
    case '/': router.home(request, response);
      break;
    case '/about': router.about(request, response);
      break;
    case '/fastcampus': router.fastcampus(request, response);
      break;
    default: router.err_404(request, response);
      break;
  }

  // response.end();
}).listen(process.env.PORT || 3030);

console.log("First Node Server is running at localhost");
