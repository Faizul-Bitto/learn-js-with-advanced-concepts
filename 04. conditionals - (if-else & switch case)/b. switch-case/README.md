
-----

# JavaScript `switch` Statement

This document explains the JavaScript `switch` statement, a control flow structure that provides a clean way to handle multiple conditions for a single expression. It is a powerful alternative to a long chain of `if-else if-else` statements.

## 1\. How it Works

A `switch` statement evaluates a single expression and then compares its value against a series of `case` clauses. When a match is found, the code block for that `case` is executed.

The core components are:

  * **`switch (expression)`**: The expression whose value will be evaluated.
  * **`case value:`**: A specific value to compare against the expression. The comparison is a **strict equality check** (`===`).
  * **`break;`**: This keyword is crucial. It stops the execution of the `switch` statement after a matching `case` block has run. **Without `break`, the program will "fall-through" and execute the code in the next `case` block, regardless of whether it matches or not.**
  * **`default:`**: An optional "catch-all" block that runs if none of the `case` values match the expression. It acts similarly to the `else` block in an `if-else` statement.

## 2\. Code Example

```javascript
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

## 3\. Explanation and Result

In the code above, the `day` variable is initialized with the string `'Monday'`.

1.  The `switch` statement evaluates the `day` variable.
2.  It then compares `'Monday'` against each `case` value.
3.  A match is found with `case 'Monday'`.
4.  The code inside that block, `console.log( 'Today is Monday!' );`, is executed.
5.  The `break` statement then immediately exits the `switch` statement, preventing any other `case` blocks from running.

### Expected Output

```
Today is Monday!
```