//create another library that convert that show current date and time

const time = require("./time");

const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth();
const day = currentTime.getDate();
const hour = currentTime.getHours();
const sec = currentTime.getSeconds();

console.log( day, month, year, hour, sec );
