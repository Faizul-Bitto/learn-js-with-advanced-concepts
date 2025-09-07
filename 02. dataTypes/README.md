---
# JavaScript Primitive Data Types: An Overview (NNSSBBU)
---

## 📝 Description

This repository provides a concise example demonstrating several **primitive data types** in JavaScript. It introduces the "NNSSBBU" mnemonic to help remember the core primitive types and utilizes the `typeof` operator to inspect their types at runtime.

The example highlights:

- Declaring variables with **String**, **Number**, **Boolean**, and **Undefined** types.
- Using the `typeof` operator to log the type of each variable to the console.

It also touches upon the distinction between JavaScript's handling of single characters (as `String`) compared to languages like C++ where `char` is a distinct type.

---

## 💻 Code

```javascript
/*
NNSSBBU

N - Number
N - Null
S - String
S - Symbol
B - Boolean
B - Bigint
U - Undefined

There's also "character" data type. For example - 'a', but, here in javascript, we store this single character as string. Though this single character has a different data type which is called "char" in C++
*/

//! Example Code :
let name = "John"; //! String
let age = 30; //! Number
let isStudent = true; //! Boolean
let somethingUndefined; //! Undefined (better variable name for clarity)

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof somethingUndefined);

## ▶️ How to Run

You can execute this JavaScript code in a couple of common environments:

### 1. Using Node.js

If you have Node.js installed on your system:

1.  **Save the code:** Copy the code block above and save it into a file named `data_types_example.js` (or any file ending with `.js`).
2.  **Open your terminal:** Launch your terminal or command prompt.
3.  **Navigate:** Go to the directory where you saved `data_types_example.js`.
4.  **Execute:** Run the following command:
    ```bash
    node data_types_example.js
    ```

### 2. Using a Web Browser Console

1.  **Open browser:** Launch your preferred web browser (e.g., Chrome, Firefox, Edge).
2.  **Open console:** Open the developer console (typically by pressing `F12` or `Ctrl+Shift+I`, then clicking on the "Console" tab).
3.  **Paste & Run:** Paste the provided JavaScript code directly into the console's input area and press `Enter`.

---

## ✅ Expected Output

When the code is executed, you will see the following output in your console:

```
string
number
boolean
undefined
```

---

## 💡 Key Concepts Illustrated

### The "NNSSBBU" Mnemonic: JavaScript's Primitive Data Types

JavaScript has 7 primitive (non-object) data types. A helpful mnemonic to remember them is **NNSSBBU**:

1.  **N** - **Number**
2.  **N** - **Null**
3.  **S** - **String**
4.  **S** - **Symbol**
5.  **B** - **Boolean**
6.  **B** - **BigInt**
7.  **U** - **Undefined**

---

### Detailed Look at Each Primitive Type

#### 1. `Number`

- Used for both integer and floating-point numbers.
- **Example:** `let age = 30;` or `let price = 19.99;`
- `typeof` result: `"number"`

#### 2. `String`

- Used for text data, enclosed in single quotes (`''`), double quotes (`""`), or backticks (`` ` `` for template literals).
- **Example:** `let name = "John";` or `let message = 'Hello!';`
- **Character Handling:** Unlike languages like C++ with a distinct `char` type, JavaScript stores single characters (e.g., `'a'`) as strings of length 1.
- `typeof` result: `"string"`

#### 3. `Boolean`

- Represents a logical entity with two possible values: `true` or `false`.
- **Example:** `let isStudent = true;` or `let hasAccess = false;`
- `typeof` result: `"boolean"`

#### 4. `Undefined`

- Indicates that a variable has been declared but **has not yet been assigned a value**. It's also the default return value for functions that don't explicitly return anything.
- **Example:** `let somethingUndefined;` (its value is implicitly `undefined`)
- `typeof` result: `"undefined"`

#### 5. `Null`

- Represents the **intentional absence of any object value**. It's a primitive value.
- **Example:** `let emptyValue = null;`
- `typeof` result: `"object"` (⚠️ **Historical Bug/Quirk**: `typeof null` returns `"object"`. This is a long-standing bug in JavaScript that cannot be fixed without breaking existing code.)

#### 6. `Symbol` (ES6/ES2015 Feature)

- Represents a unique identifier. Symbols are guaranteed to be unique and immutable.
- Often used to add unique property keys to an object that won't clash with keys from other code.
- **Example:** `const id = Symbol('myId');`
- `typeof` result: `"symbol"`

#### 7. `BigInt` (ES2020 Feature)

- Represents whole numbers larger than `2^53 - 1` (the maximum number that `Number` can reliably represent).
- BigInts are created by appending `n` to an integer literal.
- **Example:** `const bigNumber = 1234567890123456789012345678901234567890n;`
- `typeof` result: `"bigint"`

---

### The `typeof` Operator

- The `typeof` operator returns a string indicating the type of the unevaluated operand.
- It's a useful tool for debugging and type checking in JavaScript.
- **Usage:** `typeof variableName` or `typeof value`

---
