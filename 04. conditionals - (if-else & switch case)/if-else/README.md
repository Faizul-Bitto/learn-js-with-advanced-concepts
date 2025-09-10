---
# JavaScript Conditional Statements: if, else if, else
---

## 📝 Description

This JavaScript code demonstrates the fundamental **conditional statements** using `if`, `else if`, and `else` keywords. It shows how to control program flow based on different conditions.

**Specifically, this example covers:**

- Basic `if-else` statement to make a binary decision based on a condition.
- Extended `if-else if-else` statement to handle multiple conditions in sequence.
- Using comparison operators within conditional statements to evaluate expressions.

---

## 💻 Code

```javascript
//! if-else
let weather = 'sunny';

if ( weather === 'sunny' ) {
    console.log( 'Wear sunglasses!' );
} else {
    console.log( 'Wear a raincoat!' );
}

//! if-elseif-else
let temperature = 20;

if ( temperature > 20 ) {
    console.log( 'It is warm outside!' );
} else if ( temperature < 10 ) {
    console.log( 'It is freezing outside!' );
} else if ( temperature > 30 ) {
    console.log( 'It is hot outside!' );
} else {
    console.log( 'It is a normal temperature outside!' );
}
```

---

## ▶️ How to Run

You can execute this JavaScript code in a couple of common environments:

### 1. Using Node.js

If you have Node.js installed on your system:

1.  **Save the code:** Copy the code block above and save it into a file named `conditionals.js` (or any file ending with `.js`).
2.  **Open your terminal:** Launch your terminal or command prompt.
3.  **Navigate:** Go to the directory where you saved `conditionals.js`.
4.  **Execute:** Run the following command:
    ```bash
    node conditionals.js
    ```

### 2. Using a Web Browser Console

1.  **Open browser:** Launch your preferred web browser (e.g., Chrome, Firefox, Edge).
2.  **Open console:** Open the developer console (typically by pressing `F12` or `Ctrl+Shift+I`, then clicking on the "Console" tab).
3.  **Paste & Run:** Paste the provided JavaScript code directly into the console's input area and press `Enter`.