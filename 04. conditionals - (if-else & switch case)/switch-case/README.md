---
# JavaScript Switch Case Statement
---

## 📝 Description

This JavaScript code demonstrates the **switch case statement**, which is an alternative to multiple `if-else` statements when comparing a value against multiple possible cases. It provides a cleaner way to handle multiple conditions based on a single expression.

**Specifically, this example covers:**

- Using the `switch` statement to evaluate a variable against multiple cases
- Implementing `case` blocks for different possible values
- Using the `break` statement to exit the switch block after a match is found
- Providing a `default` case to handle values that don't match any case

---

## 💻 Code Explanation

```javascript
//! switch-case
let day = 'Monday';

switch ( day ) {
    case 'Monday':
        console.log( 'Today is Monday!' );
        break;
    case 'Tuesday':
        console.log( 'Today is Tuesday!' );
        break;
    case 'Wednesday':
        console.log( 'Today is Wednesday!' );
        break;
    case 'Thursday':
        console.log( 'Today is Thursday!' );
        break;
    case 'Friday':
        console.log( 'Today is Friday!' );
        break;
    case 'Saturday':
        console.log( 'Today is Saturday!' );
        break;
    case 'Sunday':
        console.log( 'Today is Sunday!' );
        break;
    default:
        console.log( 'It is another day!' );
}
```

### Line-by-Line Explanation:

1. `let day = 'Monday';` - Declares a variable named `day` and assigns it the string value 'Monday'.

2. `switch ( day ) { ... }` - Starts a switch statement that evaluates the value of the `day` variable.

3. `case 'Monday':` - Defines a case for when `day` equals 'Monday'.

4. `console.log( 'Today is Monday!' );` - If the case matches, this code executes and prints the message.

5. `break;` - Exits the switch statement after executing the matched case. Without this, execution would "fall through" to the next case.

6. Additional cases for other days of the week follow the same pattern.

7. `default:` - This case executes if none of the other cases match the value of `day`.

8. `console.log( 'It is another day!' );` - The code to execute for the default case.

### Key Concepts:

- **Switch Statement**: Evaluates an expression once and compares it with multiple possible case values.

- **Case Clauses**: Each case represents a possible value that the expression might match.

- **Break Statement**: Prevents "fall-through" behavior where multiple case blocks would execute sequentially.

- **Default Clause**: Executes when none of the case values match the expression.

- **Strict Comparison**: The switch statement uses strict equality (`===`) when comparing the expression with case values.

---

## ▶️ How to Run

You can execute this JavaScript code in a couple of common environments:

### 1. Using Node.js

If you have Node.js installed on your system:

1.  **Save the code:** Copy the code block above and save it into a file named `switch-case.js` (or any file ending with `.js`).
2.  **Open your terminal:** Launch your terminal or command prompt.
3.  **Navigate:** Go to the directory where you saved `switch-case.js`.
4.  **Execute:** Run the following command:
    ```bash
    node switch-case.js
    ```

### 2. Using a Web Browser Console

1.  **Open browser:** Launch your preferred web browser (e.g., Chrome, Firefox, Edge).
2.  **Open console:** Open the developer console (typically by pressing `F12` or `Ctrl+Shift+I`, then clicking on the "Console" tab).
3.  **Paste & Run:** Paste the provided JavaScript code directly into the console's input area and press `Enter`.