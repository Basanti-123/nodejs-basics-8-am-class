const puc = require("proper-upper-case");

const convertString = (string) => {
  return puc(string);
};
const result = convertString("basanti nagari is student");
console.log(result);

/*npm -v
npm library (npmjs.com)
library = proper-upper-Case
npm i proper-upper-case
we will get node-modules, package.json,package-lock.json
import the package in the code (require)
use the package and done!!*/

// Q.n 1 write a js function to convert title to slug
// eg: "React js Clean Code Guide" => react-js-clean-code-guide

const slugger = (string) => {
  return string.toLowerCase().replaceAll(" ", "-");
};

const res = slugger("React js Clean Code Guide");
console.log({ res });

// use npm package to find the slug converter(slugify package or npm i slugify)

const slugify = require("slugify");

const sluggers = (string) => {
  return slugify(string, { lower: true });
};
const ress = sluggers("React js Clean Code Guide");
console.log({ ress });

// bcryptjs

// use the above package to convert the string to hash
// password => $2.....


