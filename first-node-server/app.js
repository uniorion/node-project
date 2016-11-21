var http = require('http');


var app = http.createServer(function(request, response){
	// response.writeHead(200, {'Content-Type':'text/plain'});
	// response.write("Hello NodeJS World~~");
	// response.end();
  console.log(request.url);

  if ( request.url === "/" ) {
    // root일 경우에만 출력
    response.write("This is HOME!!!!!!!!");
  }
  response.end();
}).listen(process.env.PORT || 3030);

console.log("First Node Server is running at localhost");
