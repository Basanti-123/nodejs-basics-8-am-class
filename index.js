/*const http = require("http"); //
http
  .createServer((req, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("Hello world, Basanti");
  })
  .listen(8000);

console.log("server running at port 8000");*/



const library = require("./library");

const result = library.sum(2, 9);
const mul = library.mul(8, 6);
const div = library.div(8, 2);

console.log(mul, result, div);

// create another library that convert string to upperCase
// create another library that convert that show current date and time
// create another library that convert fahrenheit temp to celcius
// create another library that convert mit. to km
