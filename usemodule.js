var d = require("./module1");
console.log(d.myDateTime());
console.log(d.obj);
var p = new d.Person("a", 50);
console.log(p);

var Person2 = require("./module2");
var p2 = new Person2("b", 70);
console.log(p2);
