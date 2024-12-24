function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers.'); //Explicit type checking
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

//Corrected Behavior:
console.log(foo(5, '5')); // Throws an error: Both parameters must be numbers.
console.log(foo('5', 5)); // Throws an error: Both parameters must be numbers.
console.log(foo('abc', 5)); // Throws an error: Both parameters must be numbers.