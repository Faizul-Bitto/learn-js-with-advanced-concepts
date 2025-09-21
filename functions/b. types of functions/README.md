# JavaScript Function Types - Complete Guide

## What You'll Learn

This guide explains the five different types of functions in JavaScript demonstrated in `types of functions.js`. You'll understand:

- Function Declarations and their hoisting behavior
- Function Expressions stored in variables
- Arrow Functions and their concise syntax
- Anonymous Functions and their use cases
- IIFE (Immediately Invoked Function Expressions) and automatic execution

## Understanding Function Types in JavaScript

JavaScript provides multiple ways to create and use functions, each with its own characteristics and use cases. Understanding these different types helps you choose the right approach for your specific needs.

---

## 1. Function Declaration

### The Code:

```javascript
function greet() {
  console.log("Hello World");
}

greet(); // Hello World
```

### What's Happening:

- **`function greet()`** - Creates a named function called "greet"
- **Function is hoisted** - Can be called before it's defined in the code
- **`greet()`** - Invokes the function, executing the code inside
- **Result: "Hello World"** - The function outputs the message

### Key Characteristics:

| Feature      | Behavior                             |
| ------------ | ------------------------------------ |
| **Hoisting** | ✅ Can be called before declaration  |
| **Name**     | Always has a name                    |
| **Syntax**   | `function name() {}`                 |
| **Use Case** | Main functions, reusable code blocks |

### Hoisting Example:

```javascript
// This works because of hoisting
sayHello(); // "Hello from hoisted function!"

function sayHello() {
  console.log("Hello from hoisted function!");
}
```

The function declaration is "hoisted" to the top of its scope, making it available throughout the entire scope.

---

## 2. Function Expression

### The Code:

```javascript
const greet2 = function () {
  console.log("Hello World");
};

greet2(); // Hello World
```

### What's Happening:

- **`const greet2 = function()`** - A function is stored in a variable
- **Anonymous function** - The function itself has no name
- **Not hoisted** - Must be defined before use
- **Variable name used for calling** - `greet2()` invokes the function

### Key Characteristics:

| Feature      | Behavior                                 |
| ------------ | ---------------------------------------- |
| **Hoisting** | ❌ Cannot be called before declaration   |
| **Name**     | Function is anonymous, variable has name |
| **Syntax**   | `const name = function() {}`             |
| **Use Case** | Conditional function creation, callbacks |

### Function Declaration vs Function Expression:

```javascript
// ✅ This works (Function Declaration)
declaration(); // "I'm declared!"

function declaration() {
  console.log("I'm declared!");
}

// ❌ This fails (Function Expression)
expression(); // TypeError: expression is not a function

const expression = function () {
  console.log("I'm an expression!");
};
```

### Why Use Function Expressions?

```javascript
let operation;

if (isAdvancedUser) {
  operation = function () {
    console.log("Advanced operation");
  };
} else {
  operation = function () {
    console.log("Basic operation");
  };
}

operation(); // Different function based on condition
```

---

## 3. Arrow Function

### The Code:

```javascript
const greet3 = () => {
  console.log("Hello World");
};

greet3(); // Hello World
```

### What's Happening:

- **`const greet3 = () => {}`** - Arrow function syntax introduced in ES6
- **Fat arrow `=>`** - Replaces the `function` keyword
- **Concise syntax** - Shorter way to write functions
- **Lexical `this` binding** - Different `this` behavior than regular functions

### Key Characteristics:

| Feature            | Behavior                                      |
| ------------------ | --------------------------------------------- |
| **Hoisting**       | ❌ Cannot be called before declaration        |
| **Syntax**         | `const name = () => {}`                       |
| **`this` binding** | Lexical (inherits from surrounding scope)     |
| **Use Case**       | Callbacks, short functions, modern JavaScript |

### Arrow Function Variations:

```javascript
// Multiple parameters
const add = (a, b) => {
  return a + b;
};

// Single parameter (parentheses optional)
const double = (num) => {
  return num * 2;
};

// No parameters
const getRandomNumber = () => {
  return Math.random();
};

// Implicit return (one-liner)
const multiply = (a, b) => a * b;

// Implicit return with object (needs parentheses)
const createUser = (name, age) => ({ name, age });
```

### When to Use Arrow Functions:

✅ **Good for:**

- Array methods (`map`, `filter`, `reduce`)
- Short callback functions
- Functions that don't need their own `this`

❌ **Avoid for:**

- Object methods (where you need `this` to refer to the object)
- Event handlers (where you need `this` to refer to the element)
- Constructor functions

---

## 4. Anonymous Function

### The Code:

```javascript
setTimeout(function () {
  console.log("Timer is done");
}, 1000);
```

### What's Happening:

- **`function()`** - A function without a name
- **Used as callback** - Passed directly to another function
- **One-time use** - Often used for immediate execution
- **Result: "Timer is done"** - Executes after 1000ms (1 second)

### Key Characteristics:

| Feature         | Behavior                                       |
| --------------- | ---------------------------------------------- |
| **Name**        | No name assigned                               |
| **Usage**       | Passed directly as arguments                   |
| **Reusability** | Cannot be called again directly                |
| **Use Case**    | Callbacks, event handlers, one-time operations |

### Common Use Cases:

```javascript
// Event listeners
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});

// Promises
fetch("/api/data")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
```

### Anonymous vs Named Functions in Callbacks:

```javascript
// Anonymous function
setTimeout(function () {
  console.log("Anonymous timer");
}, 1000);

// Named function
function timerCallback() {
  console.log("Named timer");
}
setTimeout(timerCallback, 1000);
```

**Benefits of named functions:**

- Better error messages in stack traces
- Can be reused
- Easier to debug

---

## 5. IIFE (Immediately Invoked Function Expression)

### The Code:

```javascript
(function () {
  console.log("IIFE");
})();
```

### What's Happening:

- **`(function() {})`** - Function wrapped in parentheses
- **`()`** - Immediately invokes the function
- **Executes immediately** - Runs as soon as it's defined
- **Result: "IIFE"** - Outputs immediately when code is parsed

### Key Characteristics:

| Feature       | Behavior                                   |
| ------------- | ------------------------------------------ |
| **Execution** | Runs immediately upon definition           |
| **Scope**     | Creates its own isolated scope             |
| **Syntax**    | `(function() {})()` or `(function() {}())` |
| **Use Case**  | Module pattern, avoiding global pollution  |

### IIFE Syntax Variations:

```javascript
// Method 1: Parentheses around the whole expression
(function () {
  console.log("IIFE Method 1");
})();

// Method 2: Parentheses around function only
(function () {
  console.log("IIFE Method 2");
})();

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE");
})();

// IIFE with parameters
(function (name) {
  console.log(`Hello, ${name}!`);
})("World");
```

### Why Use IIFE?

#### 1. **Avoiding Global Pollution:**

```javascript
// Without IIFE - pollutes global scope
var userName = "John";
var userAge = 25;

// With IIFE - keeps variables private
(function () {
  var userName = "John";
  var userAge = 25;
  // These variables don't exist outside this function
})();
```

#### 2. **Module Pattern:**

```javascript
const MyModule = (function () {
  let privateVariable = "I'm private";

  function privateFunction() {
    console.log("Private function called");
  }

  return {
    publicMethod: function () {
      console.log("Public method can access:", privateVariable);
      privateFunction();
    },
    publicVariable: "I'm public",
  };
})();

MyModule.publicMethod(); // Works
console.log(MyModule.publicVariable); // Works
// console.log(MyModule.privateVariable); // undefined
```

#### 3. **Initialization Code:**

```javascript
(function () {
  console.log("App initializing...");

  // Setup code that runs once
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM ready!");
  });

  console.log("App initialized!");
})();
```

---

## Complete Code Execution Flow

When you run `node "types of functions.js"`, here's the execution order:

```
1. Function declarations are hoisted (greet is available)
2. Code executes line by line:

Line: greet()
Output: "Hello World"
Explanation: Function declaration called

-----------------------------------------

Line: greet2()
Output: "Hello World"
Explanation: Function expression called

-----------------------------------------

Line: greet3()
Output: "Hello World"
Explanation: Arrow function called

-----------------------------------------

Line: setTimeout(function() {...}, 1000)
Output: (after 1 second) "Timer is done"
Explanation: Anonymous function runs after timeout

-----------------------------------------

Line: (function() { console.log("IIFE"); })()
Output: "IIFE"
Explanation: IIFE executes immediately

-----------------------------------------
```

## Function Type Comparison Table

| Type            | Hoisting | Has Name | Syntax                       | Best Use Case                   |
| --------------- | -------- | -------- | ---------------------------- | ------------------------------- |
| **Declaration** | ✅ Yes   | ✅ Yes   | `function name() {}`         | Main functions, utilities       |
| **Expression**  | ❌ No    | ❌ No    | `const name = function() {}` | Conditional creation, variables |
| **Arrow**       | ❌ No    | ❌ No    | `const name = () => {}`      | Callbacks, modern syntax        |
| **Anonymous**   | ❌ No    | ❌ No    | `function() {}`              | One-time callbacks              |
| **IIFE**        | ❌ No    | ❌ No    | `(function() {})()`          | Initialization, modules         |

## When to Use Each Type

### Use Function Declarations when:

- Creating main utility functions
- Need hoisting behavior
- Writing traditional JavaScript

### Use Function Expressions when:

- Creating functions conditionally
- Storing functions in data structures
- Need to emphasize that function is a value

### Use Arrow Functions when:

- Writing short callback functions
- Working with array methods
- Need lexical `this` binding
- Prefer modern ES6+ syntax

### Use Anonymous Functions when:

- Creating one-time callbacks
- Simple event handlers
- Don't need to reuse the function

### Use IIFE when:

- Need immediate execution
- Creating modules or namespaces
- Avoiding global scope pollution
- Initializing application code

## Key Takeaways

1. **Function Declarations** are hoisted and always have names
2. **Function Expressions** are not hoisted and create anonymous functions stored in variables
3. **Arrow Functions** provide concise syntax and lexical `this` binding
4. **Anonymous Functions** are perfect for one-time use as callbacks
5. **IIFE** executes immediately and creates isolated scope
6. Each type serves different purposes in JavaScript programming
7. Modern JavaScript favors arrow functions for callbacks and function expressions for stored functions

## Running the Code

To see all function types in action:

```bash
node "types of functions.js"
```

You'll see the immediate outputs, followed by the timer message after one second.

Understanding these function types is essential for writing clean, efficient JavaScript code!
