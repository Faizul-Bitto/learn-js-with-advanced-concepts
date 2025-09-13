---
# JavaScript Scope
---

## 📝 Description

Scope determines **where you can access variables and functions** in your JavaScript code. Think of scope like rooms in a house - you can access things in your current room and rooms outside, but not things in other separate rooms.

**This example covers:**

- **Global Scope** - accessible everywhere (like the main hallway)
- **Function Scope** - accessible only inside the function (like your bedroom)
- **Block Scope** - accessible only inside blocks `{}` (like a closet)

---

## 💻 Code

```javascript
// Global variables - everyone can access
var globalVar = "I'm global";

function myFunction() {
  // Function variables - only this function can access
  var functionVar = "I'm inside function";

  console.log(globalVar); // ✅ Works
  console.log(functionVar); // ✅ Works
}

// console.log(functionVar);     // ❌ ERROR! Can't access
```

---

## ▶️ How to Run

```bash
node scope.js
```

---

## ✅ Expected Output

```
=== JavaScript Scope Examples ===

--- Global Scope ---
I'm global
I'm also global
I'm a global function

--- Inside Function ---
I'm global
I'm inside function

--- Inside Inner Function ---
I'm global
I'm inside function
I'm in inner function

--- Block Scope Example ---
Inside block:
I'm function scoped
I'm var in block
I'm let in block
I'm const in block
Outside block:
I'm function scoped
I'm var in block

--- Simple Examples ---

--- Loop Variables ---
var i: 0
var i: 1
var i: 2
After loop, var i: 3
let j: 0
let j: 1
let j: 2

=== End of Examples ===
```

---

## 💡 Key Concepts

### 1. Global Scope ✅ Accessible Everywhere

```javascript
var global = "Everyone can see me";

function anyFunction() {
  console.log(global); // ✅ Works
}

console.log(global); // ✅ Works
```

### 2. Function Scope ✅ Only Inside Function

```javascript
function myFunction() {
  var secret = "Only I can see this";
  console.log(secret); // ✅ Works
}

// console.log(secret); // ❌ ERROR!
```

### 3. Block Scope ✅ Only Inside `{}`

```javascript
if (true) {
  let blockVar = "Only inside this block";
  var normalVar = "I ignore blocks";
}

// console.log(blockVar);  // ❌ ERROR! (let/const respect blocks)
console.log(normalVar); // ✅ Works (var ignores blocks)
```

---

## 🚫 What's NOT Accessible

| From         | Can Access              | Cannot Access              |
| ------------ | ----------------------- | -------------------------- |
| **Global**   | Global variables        | Function/Block variables   |
| **Function** | Global + own variables  | Other function's variables |
| **Block**    | Global + function + own | Other block's variables    |

### Examples of Errors:

```javascript
// ❌ Can't access function variables outside
function test() {
  var inside = "secret";
}
// console.log(inside); // ERROR!

// ❌ Can't access block variables outside (let/const)
if (true) {
  let blockSecret = "hidden";
}
// console.log(blockSecret); // ERROR!

// ❌ Functions can't access each other's variables
function functionA() {
  var secretA = "A's secret";
}
function functionB() {
  // console.log(secretA); // ERROR!
}
```

---

## 🎯 Simple Rules

1. **Global variables** → Everyone can access
2. **Function variables** → Only that function can access
3. **Block variables** (let/const) → Only that block can access
4. **var ignores blocks** → Only cares about functions
5. **Inner can see outer** → But outer cannot see inner

---

## 🔄 Visual Example

```
Global Scope (🌍 everyone can access)
├── var globalVar = "global"
├── function myFunction() {
│   ├── Function Scope (🏠 only this function)
│   ├── var functionVar = "function"
│   ├── if (true) {
│   │   ├── Block Scope (🚪 only this block)
│   │   ├── let blockVar = "block";
│   │   └── } ❌ blockVar dies here
│   └── } ❌ functionVar dies here
└── ❌ Can't access functionVar or blockVar
```

---

## 📚 Key Takeaways

- **Scope = Where can I access this variable?**
- **Global** = Accessible everywhere
- **Function** = Accessible only in that function
- **Block** = Accessible only in that block (let/const)
- **var** = Ignores block scope, only cares about functions
- **Inner can access outer, but not the opposite**
