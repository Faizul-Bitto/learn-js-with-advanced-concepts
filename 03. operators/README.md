# JavaScript Operators Explained

This document provides a comprehensive breakdown of common JavaScript operators, including their syntax and usage, with examples from the provided code.

---

## 1. Arithmetic Operators

These operators perform basic mathematical calculations on numbers.

| Operator | Description                                                                                      | Example                               |
| :------- | :----------------------------------------------------------------------------------------------- | :------------------------------------ |
| **+**    | **Addition:** Adds two operands.                                                                 | `5 + 3` results in `8`                |
| **-**    | **Subtraction:** Subtracts the right operand from the left.                                      | `5 - 3` results in `2`                |
| **\***   | **Multiplication:** Multiplies two operands.                                                     | `5 * 3` results in `15`               |
| **/**    | **Division:** Divides the left operand by the right.                                             | `5 / 3` results in `1.666...`         |
| **%**    | **Modulus:** Returns the remainder of a division. For example, `5 % 3` gives a remainder of `2`. | `5 % 3` results in `2`                |
| **\*\*** | **Exponentiation:** Raises the first operand to the power of the second.                         | `5 ** 3` results in `125` (5 _ 5 _ 5) |

---

## 2. Relational (Comparison) Operators

These operators compare two operands and return a boolean value (`true` or `false`).

| Operator       | Description                                                                                                                                                                         | Example                                                                                                     |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| **==**         | **Equality:** Checks if two operands are equal in value, **coercing** (converting) data types if necessary.                                                                         | `10 == "10"` results in `true` because the string `"10"` is converted to the number `10` before comparison. |
| **===**        | **Strict Equality:** Checks if two operands are equal in **both value and data type**. This is generally the preferred method for comparison as it avoids unexpected type coercion. | `10 === "10"` results in `false` because they have different data types (number vs. string).                |
| **!=**         | **Inequality:** Checks if two operands are not equal in value, with type coercion.                                                                                                  | `10 != "10"` results in `false`                                                                             |
| **!==**        | **Strict Inequality:** Checks if two operands are not equal in either value or data type.                                                                                           | `10 !== "10"` results in `true`                                                                             |
| **<**, **>**   | **Less Than**, **Greater Than**                                                                                                                                                     | `10 < 20` is `true`, `10 > 20` is `false`                                                                   |
| **<=**, **>=** | **Less Than or Equal To**, **Greater Than or Equal To**                                                                                                                             | `10 <= 10` is `true`                                                                                        |

---

## 3. Increment/Decrement Operators

These are shorthand operators to increase or decrease a variable's value by one.

| Operator | Description                                          | Example                                  |
| :------- | :--------------------------------------------------- | :--------------------------------------- |
| **++**   | **Increment:** Increases the operand's value by one. | `let x = 0; x++;` makes `x` equal to `1` |
| **--**   | **Decrement:** Decreases the operand's value by one. | `let x = 1; x--;` makes `x` equal to `0` |

---

## 4. Assignment Operators

These operators assign a value to a variable, often as a shorthand for a mathematical operation.

| Operator | Description                                                                                       | Example                         | Equivalent to...                       |
| :------- | :------------------------------------------------------------------------------------------------ | :------------------------------ | :------------------------------------- |
| **=**    | **Assignment:** Assigns the value on the right to the variable on the left.                       | `let x = 5;`                    |                                        |
| **+=**   | **Addition Assignment:** Adds the right operand to the left and assigns the result.               | `x += 3`                        | `x = x + 3`                            |
| **-=**   | **Subtraction Assignment:** Subtracts the right operand from the left and assigns the result.     | `x -= 3`                        | `x = x - 3`                            |
| **\*=**  | **Multiplication Assignment:** Multiplies the right operand with the left and assigns the result. | `x \*= 3`                       | `x = x \* 3`                           |
| ...      | Similar operators exist for division (`/=`), modulus (`%=`), and exponentiation (`\*\*=`).        | `x /= 3`, `x %= 3`, `x \*\*= 3` | `x = x / 3`, `x = x % 3`, `x = x ** 3` |

---

## 5. Ternary Operator

This is a compact operator for a simple `if-else` statement. It evaluates a condition and returns one of two values.

| Syntax                                       | Description                                                                                   | Example                                                                                      |
| :------------------------------------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| `condition ? value_if_true : value_if_false` | If the `condition` is `true`, the first value is returned; otherwise, the second is returned. | `let canVote = age >= 18 ? "Yes" : "No";` If `age` is 18 or more, `canVote` becomes `"Yes"`. |

---

## 6. Nullish Coalescing Operator (`??`)

This operator checks if a value is **strictly** `null` or `undefined` and provides a default value. It's different from the logical OR (`||`) operator, which returns the right side for any "falsy" value (like `0`, empty string `""`, `false`, `null`, `undefined`).

| Syntax                       | Description                                                                                                                                               | Example                                                                              |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| `variable ??= default_value` | If the left operand (`variable`) is `null` or `undefined`, the right operand (`default_value`) is assigned to it. Otherwise, the value remains unchanged. | `let name = null; name ??= "John";` Since `name` is `null`, it is assigned `"John"`. |

---

## 7. Spread and Rest Operators (`...`)

The three dots (`...`) can be used for two distinct purposes depending on their context.

| Name                | Context                                                                   | Description                                                                                                                                  | Example                                                                                                                                                                       |
| :------------------ | :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spread Operator** | Used on the **right side** of an assignment or as a function's arguments. | It "spreads" the elements of an iterable (like an array or object) into a new array or object.                                               | `let arr3 = [...arr1, ...arr2];` This creates a new array `arr3` by spreading the elements of `arr1` and `arr2` into it, resulting in `[1, 2, 3, 4, 5, 6]`.                   |
| **Rest Operator**   | Used as a function's **parameters**.                                      | It "collects" an indefinite number of arguments into a single array. This is useful for functions that can take a variable number of inputs. | `function sum(...numbers)` The `...numbers` parameter collects all arguments passed to `sum` (e.g., `1, 2, 3, 4, 5`) into a single array named `numbers` (`[1, 2, 3, 4, 5]`). |

---

## 8. Optional Chaining Operator (`?.`)

This operator provides a safe way to access deeply nested object properties without causing an error if an intermediate property is `null` or `undefined`.

| Syntax             | Description                                                                                                                                                                | Example                                                                                                                                                                                                           |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object?.property` | If the object is not `null` or `undefined`, the property is accessed. If it is, the expression "short-circuits" and returns `undefined` instead of throwing a `TypeError`. | `user?.address?.street;` This checks if `user` exists and if `user.address` exists before trying to access `user.address.street`. If any part of the chain is missing, the expression returns `undefined` safely. |
