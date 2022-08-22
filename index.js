// 1.
function test() {
  let a;
  console.log(a);
  console.log(foo());

  a = 1;
  function foo() {
    return 2;
  }
}

test();
// the result is "undefined" and "2". "a" is just declared, but not assigned any value yet, thats why it is logged as Undefined.  And foo() searches for the foo function, which when executed, returns 2.
console.log("--------------------");
// 2.
let a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(2);
console.log(result);
// the result is 5

// 3.
let fullname = "John Doe";
const obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

const test2 = obj.prop.getFullname;

console.log(test2());
// the result is "Aurelio De Rosa" and "undefined". the first result returns this.fullname which is the local scope of fullname : Aurelio De Rosa.  The undefined comes because its used as a global variable, and global variables cannot access inner scope. Only the other way around.

// 4.
let x = 1;
function b() {
  x = 10;
  return;
  function x() {}
}
b();
console.log(x);
