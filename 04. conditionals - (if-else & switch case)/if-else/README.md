### **How an `if-else` Statement Works**

An `if-else` statement is a fundamental control flow structure that creates a simple, two-way decision. It's like asking a yes-or-no question. If the answer is "yes" (the condition is **true**), the code in the `if` block runs. If the answer is "no" (the condition is **false**), the code in the `else` block runs instead.

#### **Code**

```javascript
let weather = 'sunny';

if ( weather === 'sunny' ) {
    console.log( 'Wear sunglasses!' );
} else {
    console.log( 'Wear a raincoat!' );
}
```

#### **Explanation**

1.  The code first checks the condition `weather === 'sunny'`.
2.  Since the variable `weather` is indeed `'sunny'`, the condition evaluates to **true**.
3.  The program executes the code within the `if` block, which logs the message `'Wear sunglasses!'`.
4.  The `else` block is completely ignored.

**Output:** `Wear sunglasses!`

-----

### **How an `if-else if-else` Statement Works**

This structure handles **multiple, mutually exclusive conditions** in a sequential manner. The program checks each condition in order. As soon as a condition is found to be **true**, the corresponding code block is executed, and the program skips the rest of the checks and moves on. If none of the conditions are met, the final `else` block acts as a "catch-all."

#### **Code**

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

#### **Explanation**

1.  The code checks the first condition, `temperature > 20`, which is **false** (20 is not greater than 20).
2.  It moves to the first `else if` condition, `temperature < 10`, which is also **false**.
3.  It then checks the second `else if` condition, `temperature > 30`, which is **false**.
4.  Since no preceding conditions were true, the code within the final `else` block is executed.

**Output:** `It is a normal temperature outside!`