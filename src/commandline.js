"use strict";

// 0 = node, 1 = script, 2 = 1. arg, 3 ) 2. arg. etc
// try node commandline.js 1 2 3
for (let j = 0; j < process.argv.length; j++) {
  console.log(j + " -> " + process.argv[j]);
}

// or
console.log();
var a = process.argv.slice(2);
console.log("1 -> " + a[0]);
console.log("2 -> " + a[1]);
console.log("3 -> " + a[2]);

// npm install minimist --save
// https://github.com/substack/minimist
const args = require("minimist")(process.argv.slice(2));

// try node commandline.js -n michell -c odense
console.log();
console.log(args);
console.log("n -> " + args.n);
console.log("c -> " + args.c);
