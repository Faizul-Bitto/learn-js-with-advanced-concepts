Here's the `README.md` documentation for the provided `switch-case` code.

-----

# JavaScript `switch` Statement Explained

This document provides a breakdown of the `switch` statement in JavaScript, including the code to show how it's used in practice. A `switch` statement is a control flow mechanism that lets a program execute different code blocks based on the value of a single variable. It's often a cleaner alternative to a long chain of `if-else if-else` statements.

## The `switch` Statement

The `switch` statement evaluates an **expression** and compares its value against a series of `case` clauses. When a match is found, the code associated with that `case` is executed.

### Code

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

### Explanation

  - **`switch (expression)`**: The `switch` statement takes an expression (in this case, the `day` variable). The value of this expression is what the `case` clauses will be compared against.
  - **`case value:`**: Each `case` clause represents a possible value for the expression. The program checks if `day`'s value matches `'Monday'`, then `'Tuesday'`, and so on, using a strict comparison (`===`).
  - **`break;`**: The `break` keyword is crucial. It immediately exits the `switch` statement after a `case` has been executed. If `break` is omitted, the code will continue to "fall-through" and execute the code in the next `case` block, regardless of whether it matches or not.
  - **`default:`**: The `default` clause is optional but highly recommended. It acts as a "catch-all" and is executed if none of the `case` values match the expression. It's similar to the final `else` block in an `if-else if-else` chain.

In the provided example, the `day` variable is `'Monday'`. The `switch` statement finds a match with `case 'Monday'`, logs the message, and then the `break` statement prevents any further execution within the `switch` block. The output is `Today is Monday!`.