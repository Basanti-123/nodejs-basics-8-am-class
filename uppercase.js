const http = require("http");

// const upperCase = require("./uppercase");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" });
//     const myName = upperCase.upperCase("basanti");

//     res.write("Hello");
//     res.end();
//   })
//   .listen(8080);

// console.log("App is running on port 8080");

const name = "basanti nagari";
const result = name.toUpperCase();

console.log(result);
