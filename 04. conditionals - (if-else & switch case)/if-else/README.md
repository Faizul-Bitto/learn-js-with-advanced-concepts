Okay, here's the documentation including the code snippets.

-----

# JavaScript Conditionals Explained

This document provides a breakdown of `if`, `else if`, and `else` statements in JavaScript, including the code itself to show how they are used in practice. These statements are fundamental to controlling the flow of a program based on certain conditions.

-----

## 1\. `if-else` Statement

The `if-else` statement executes a block of code if a condition is **true** and a different block if the condition is **false**. It provides a simple, two-way decision path.

### Code

```javascript
let weather = 'sunny';

if ( weather === 'sunny' ) {
    console.log( 'Wear sunglasses!' );
} else {
    console.log( 'Wear a raincoat!' );
}
```

### Explanation

  - The `if` keyword introduces a condition `(weather === 'sunny')`.
  - The code inside the `if` block (`console.log('Wear sunglasses!');`) runs **only if** the condition is `true`.
  - The `else` block provides an alternative. The code inside the `else` block (`console.log('Wear a raincoat!');`) runs **only if** the `if` condition is `false`.

In the example, since `weather` is `'sunny'`, the condition is `true`, and the output is `Wear sunglasses!`.

-----

## 2\. `if-else if-else` Statement

This statement handles **multiple, mutually exclusive conditions**. The program checks each condition in order, and as soon as one is found to be `true`, it executes the corresponding code and skips the rest.

### Code

```javascript
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

### Explanation

  - The `if` block is the first condition checked.
  - `else if` blocks are used for subsequent conditions. You can have as many `else if` blocks as you need. They are only checked if the preceding `if` and `else if` conditions were all `false`.
  - The final `else` block is a "catch-all" that runs **only if** none of the preceding conditions were met.

In the example, `temperature` is `20`. The first three conditions are all `false`, so the code within the final `else` block is executed, and the output is `It is a normal temperature outside!`.