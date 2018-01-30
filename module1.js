exports.myDateTime = function() {
  return Date();
};

var obj = {
  a: 1,
  b: { x: 1 },
  c: function() {}
};

exports.obj = obj;

class Person {
  constructor(name, height) {
    this.height = height;
    this.name = name;
  }
}
exports.Person = Person;
