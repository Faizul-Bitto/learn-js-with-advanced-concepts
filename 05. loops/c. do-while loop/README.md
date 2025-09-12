# JavaScript `do-while` Loop

This document explains the JavaScript `do-while` loop, a unique looping structure that guarantees the execution of code at least once before checking the condition. Unlike `while` and `for` loops, a `do-while` loop executes its body first, then evaluates the condition to determine if it should continue.

---

## How a `do-while` Loop Works

A `do-while` loop has a **distinctive structure** that sets it apart from other loops:

1. **Execute First**: The loop body runs at least once, regardless of the condition
2. **Check Later**: After the first execution, the condition is evaluated
3. **Continue or Stop**: If the condition is true, the loop continues; if false, it stops

### Syntax

```javascript
do {
    // Code to be executed repeatedly
    // This runs AT LEAST ONCE
} while (condition);
```

**Note**: The semicolon (`;`) after the `while` condition is **required** in `do-while` loops!

---

## Code Example

```javascript
let i = 0;

do {
    console.log( i + 1 );
    i++;
} while ( i < 10 );
```

---

## Step-by-Step Explanation

Let's break down how this `do-while` loop works:

1. **Initialization**: `let i = 0` - The counter variable `i` is declared and set to 0 before the loop starts.

2. **First Execution** (guaranteed): 
   - `console.log( i + 1 )` - Prints the value of `i + 1` (which is 1)
   - `i++` - Increments `i` by 1 (i becomes 1)

3. **Condition Check**: `i < 10` - After the first execution, check if `i` is less than 10.
   - If **true**, repeat the loop body
   - If **false**, terminate the loop

4. **Repeat**: Steps 2-3 continue until the condition becomes false.

---

## Loop Execution Flow

| Iteration | `i` Value (Start) | Action               | Output (`i + 1`) | `i` Value (End) | Condition Check (`i < 10`) | Continue? |
|-----------|-------------------|----------------------|------------------|-----------------|---------------------------|-----------|
| 1st       | 0                 | Execute → Increment  | 1                | 1               | true                      | Yes       |
| 2nd       | 1                 | Execute → Increment  | 2                | 2               | true                      | Yes       |
| 3rd       | 2                 | Execute → Increment  | 3                | 3               | true                      | Yes       |
| 4th       | 3                 | Execute → Increment  | 4                | 4               | true                      | Yes       |
| 5th       | 4                 | Execute → Increment  | 5                | 5               | true                      | Yes       |
| 6th       | 5                 | Execute → Increment  | 6                | 6               | true                      | Yes       |
| 7th       | 6                 | Execute → Increment  | 7                | 7               | true                      | Yes       |
| 8th       | 7                 | Execute → Increment  | 8                | 8               | true                      | Yes       |
| 9th       | 8                 | Execute → Increment  | 9                | 9               | true                      | Yes       |
| 10th      | 9                 | Execute → Increment  | 10               | 10              | false                     | **No**    |

---

## Expected Output

```
1
2
3
4
5
6
7
8
9
10
```

---

## Key Feature: "Execute First, Ask Questions Later"

The most important characteristic of a `do-while` loop is that it **always executes at least once**, even if the condition is initially false:

### Example: Condition False from Start

```javascript
let i = 15; // Already greater than 10

do {
    console.log("This will print once!");
    i++;
} while ( i < 10 ); // Condition is false from the beginning

// Output: "This will print once!"
```

Compare this with a regular `while` loop:

```javascript
let i = 15;

while ( i < 10 ) {
    console.log("This will never print!");
    i++;
}

// Output: (nothing - loop body never executes)
```

---

## Loop Comparison: `for` vs `while` vs `do-while`

| Loop Type   | When Condition is Checked | Minimum Executions | Best Use Case                          |
|-------------|---------------------------|-------------------|----------------------------------------|
| **`for`**   | Before each iteration     | 0                 | Known number of iterations             |
| **`while`** | Before each iteration     | 0                 | Unknown iterations, condition-based    |
| **`do-while`** | After each iteration   | **1**             | At least one execution required        |

---

## Common Use Cases

`do-while` loops are ideal for:

- **User input validation**: Ask for input at least once, then keep asking until valid
  ```javascript
  let userInput;
  do {
      userInput = prompt("Enter a number between 1-10:");
  } while (userInput < 1 || userInput > 10);
  ```

- **Menu systems**: Show menu at least once, then repeat based on user choice
- **Game rounds**: Play at least one round, then ask if player wants to continue
- **Data processing**: Process at least one item, then check if more exist
- **Retry mechanisms**: Attempt an operation once, then retry if it fails

---

## Syntax Reminder

⚠️ **Don't forget the semicolon!**

```javascript
// ✅ CORRECT: Semicolon after while condition
do {
    // code here
} while (condition);

// ❌ INCORRECT: Missing semicolon
do {
    // code here
} while (condition)  // SyntaxError!
```

---

## Equivalent Loop Comparison

All three loops can produce the same result:

```javascript
// do-while version (original)
let i = 0;
do {
    console.log( i + 1 );
    i++;
} while ( i < 10 );

// while version
let i = 0;
while ( i < 10 ) {
    console.log( i + 1 );
    i++;
}

// for version
for ( let i = 0; i < 10; i++ ) {
    console.log( i + 1 );
}
```

All three produce identical output (1 through 10), but `do-while` is the best choice when you need to guarantee at least one execution.