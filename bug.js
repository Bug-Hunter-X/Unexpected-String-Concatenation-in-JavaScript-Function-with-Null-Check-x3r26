function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

//Unexpected Behavior:
console.log(foo(5, '5')); // Output: 55 (String concatenation)
console.log(foo('5', 5)); // Output: 55 (String concatenation)
console.log(foo('abc', 5)); // Output: abc5 (String concatenation)