## Back-End(NodeJS) 특강

```js
// http 모듈을 불러 http에 저장
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write("Hello NodeJS World~~");
    response.end();
}).listen(process.env.PORT || 3030);
// 다른 환경에서 3030을 쓰고 있다면 설정된 port를 사용.

console.log("First Node Server is running at localhost");
```
