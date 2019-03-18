const http = require("http");

const server = http.createServer(function(request, response){
  if (request.url === "/"){
    response.write("Hello world");
    response.end();
  }
  else if (request.url === "/secret_site"){
    response.write("bye");
    response.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");

// This still isn't as IRL as it gets... there's this thing called the express
// framework that is used. The current system here gets more and more complex
// which is a bit of an L.
