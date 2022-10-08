// nodejs elements method
// import os from 'os';
//console.log(os.userInfo());
// console.log(os.homedir());

/*
    Create new http Server anisul islam
*/

import { createServer } from "http";
const port = 3000;
const hostname = "127.0.0.1";
const server = createServer((req, res) => {
  res.end('<h1> hi i am server </h1>');
  //res.end('hi i am server');
});

server.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port} successfully`);
});
