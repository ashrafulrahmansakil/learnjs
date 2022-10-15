//    Create new http Server

// import { createServer } from "http";
// const PORT = 3000;
// const hostname = "127.0.0.1";
// import fs from "fs";
// const handelReadFile = (fileName, statuscode, req, res) => {
//   fs.readFile(fileName, "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     }
//   });
// };
// const server = createServer((req, res) => {
//   if (req.url == "/") {
//     handelReadFile("js/server.js", 200, req, res);
//   }
//   else if (req.url == "/js/index.html") {
//     handelReadFile("js/index.html", 200, req, res);
//   }
// });

// server.listen(PORT, hostname, () => {
//   console.log(`server successfully http://${hostname}:${PORT}`);
// });

import { createServer } from "http";
const PORT = 3000;
const hostname = "127.0.0.1";
const server = createServer((req, res) => {
  res.end("hi i am server");
});

server.listen(PORT, hostname, () => {
  console.log(`server is running ${PORT} ${hostname}`);
});
