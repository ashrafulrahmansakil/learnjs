import { createServer } from "http";
const port = 3000;
//const port = 8080;
// const port = 5000;
const server = createServer(function (req, res) {
  res.end("hi, this is server");
});

server.listen(port, function (error) {
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log("it's working : " + port);
  }
});
