// nodejs elements method
// import os from 'os';
//console.log(os.userInfo());
// console.log(os.homedir());

/*
    Create new http Server
*/

import { createServer } from "http";
const PORT = 3000;
const hostname = "127.0.0.1";
const server = createServer((req, res) => {
  res.writeHead(200, { "content-Type": "index.html" });
  res.write("<h1> hi i am server </h1>");
  res.end();
});

server.listen(PORT, hostname, () => {
  console.log(`server successfully http://${hostname}:${PORT}`);
});
