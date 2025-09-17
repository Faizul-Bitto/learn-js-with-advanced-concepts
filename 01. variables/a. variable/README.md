---
# JavaScript Variable Declaration: `let` vs. `const`
---

## 📝 Description

This JavaScript code demonstrates the fundamental differences in **variable declaration and initialization** using the `let` and `const` keywords. It highlights their distinct rules regarding when and how a value can be assigned.

**Specifically, this example covers:**

- Declaring a variable with `let` and assigning its value in a separate step.
- Declaring and initializing a variable with `const`, emphasizing that `const` variables **must be initialized immediately** upon declaration.
- Using `console.log()` to display the values of both types of variables.

---

## 💻 Code

```javascript
let name; //! variable declaration with 'let' keyword
name = "John"; //! variable initialization
const name2 = "Jane"; //! variable declaration with 'const' keyword. For 'const', variable initialization is mandatory. Cannot declare and then initialize

console.log(name); //! variable usage
console.log(name2); //! variable usage
```

---

## ▶️ How to Run

You can execute this JavaScript code in a couple of common environments:

### 1. Using Node.js

If you have Node.js installed on your system:

1.  **Save the code:** Copy the code block above and save it into a file named `variables_example.js` (or any file ending with `.js`).
2.  **Open your terminal:** Launch your terminal or command prompt.
3.  **Navigate:** Go to the directory where you saved `variables_example.js`.
4.  **Execute:** Run the following command:
    ```bash
    node variables_example.js
    ```

### 2. Using a Web Browser Console

1.  **Open browser:** Launch your preferred web browser (e.g., Chrome, Firefox, Edge).
2.  **Open console:** Open the developer console (typically by pressing `F12` or `Ctrl+Shift+I`, then clicking on the "Console" tab).
3.  **Paste & Run:** Paste the provided JavaScript code directly into the console's input area and press `Enter`.

---

## ✅ Expected Output

When the code is executed, you will see the following output in your console:

```
John
Jane
```

---

## 💡 Key Concepts Illustrated

### 1. `let` Keyword

The `let` keyword is used for declaring **block-scoped local variables**.

- **Declaration & Initialization:**
  - You can **declare a `let` variable without assigning an initial value immediately**, and then assign it later.
  ```javascript
  let myVariable; // Declare
  myVariable = 10; // Initialize later
  ```
- **Reassignment:**
  - `let` variables **can be reassigned** to a new value after their initial assignment.
  ```javascript
  let count = 0;
  count = 1; // This is allowed
  ```

---

### 2. `const` Keyword

The `const` keyword is used for declaring a **constant**, which is also **block-scoped**.

- **Declaration & Initialization (Mandatory):**
  - **Crucially**, `const` variables **must be initialized at the time of declaration**. You cannot declare a `const` variable without an initial value and then assign it later.
  ```javascript
  const myConstant = "fixedValue"; // Declare AND immediately initialize (mandatory)
  // const anotherConstant;           // This would cause a SyntaxError!
  ```
- **Immutability (Reference Immutability):**
  - Once a `const` variable is assigned a value, its value (for primitive types like strings, numbers, booleans) or its reference (for objects and arrays) **cannot be reassigned**.
  ```javascript
  const PI = 3.14159;
  // PI = 3.14; // This would cause a TypeError!
  ```
  > ℹ️ **Note:** For objects and arrays declared with `const`, the _reference_ itself cannot change, but the _contents_ of the object/array can still be modified.

---

### 3. General Concepts

- **Variable Declaration:** The process of creating a variable and introducing its name into the program's scope (e.g., `let name;` or `const name2 = "Jane";`).
- **Variable Initialization:** The act of assigning an initial value to a declared variable (e.g., `name = "John";` or `const name2 = "Jane";`).
- **`console.log()`:** A fundamental JavaScript function used to output messages, variables, or objects to the web console or Node.js terminal. It's invaluable for debugging and understanding program flow.
