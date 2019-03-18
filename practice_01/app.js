console.log("hello world")
const http = require("http");

const server = http.createServer(function(req, resp){
  if(req.url === "/se"){
    resp.write('./test_page.html');
    resp.end();
  }
  else if(req.url === "/"){
    resp.write("<html><body><h1>hello</h1><p>bye</p></body></html>");
    resp.end();
  }
})

server.listen(3000);
