const http = require("http");

const server = http.createServer(); // Has all capabilities of event emitter.
                                    // on, emit, etc.

server.listen(3000);

console.log("listening on port 3000...")

server.on("connection", (socket) => {
  console.log("new connection");
})

// IRL, you probably won't want to use the 'conection' server event listener
// as it is quite low-level.
