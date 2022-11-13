/**
 * Perfect Raw node server by anisul islam sir
 */

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const address = "127.0.1.1";

const server = http.createServer((req, res) => {
  const handelReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handelReadFile(200, "index.html");
  } else if (req.url === "/about") {
    handelReadFile(200, "./about.html");
  } else if (req.url === "/depertment") {
    handelReadFile(200, "./depertment.html");
  } else {
    handelReadFile(404, "./error.html");
  }
});

server.listen(PORT, address, () => {
  console.log(`server is running http://${address}:${PORT}`);
});