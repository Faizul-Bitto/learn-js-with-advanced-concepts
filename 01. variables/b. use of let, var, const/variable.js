/* 
   IMPORTANT NOTES BEFORE RUNNING:
   
    - Scoping basics:
        - 'let' and 'const': Block-scoped (limited to the nearest {} block, like a function or if-statement body).
        - 'var': Function-scoped (limited to the entire function; leaks out of inner blocks).
        - No keyword:   Implicit global (pollutes window/global object; bad practice, errors in strict mode). - Hoisting: 'var' is hoisted (can be used before declaration, initialized to undefined).
                        'let'/'const' are hoisted but enter a "temporal dead zone" (ReferenceError if used before declaration).
        - 'const': Block-scoped like 'let', but must be initialized at declaration and cannot be reassigned/redeclared.
*/

//! let
//! What is a 'let' variable? 'let' declares a block-scoped variable (re-assignable).
//! Example: Only accessible inside the function block.
function printWithLet () {
    let age = 90;  // Block-scoped to this function.
    console.log( age );  // Output: 90
}

// printWithLet();  // Uncomment to run: Outputs 90
// console.log(age);  // ❌ ERROR: ReferenceError: age is not defined
//                     (Cannot access outside the block)

//! To show block-scoping difference, inner block example:
function demoLetBlockScope () {
    let x = 1;
    if ( true ) {
        let x = 2;  // New 'let' shadows outer x; block-scoped to if-body.
        console.log( x );  // Output: 2
    }
    console.log( x );  // Output: 1 (outer x unchanged)
}
demoLetBlockScope();  // Outputs: 2 then 1

console.log( "-------------" );

//! Without any keyword (implicit global - AVOID THIS!)
//! Assigning to an undeclared variable creates a global (accessible everywhere).
//! NOT the same as 'var' - this pollutes the global scope.
function printWithoutAnyKeyword () {
    age = 10;  // Implicit global: No keyword means global assignment.
    console.log( age );  // Output: 10
}

// printWithoutAnyKeyword();  // Uncomment to run: Outputs 10
// console.log(age);  // Output: 10 (accessible globally - bad!)
//                     // In strict mode: ReferenceError: age is not defined

console.log( "-------------" );

//! var
//! What is a 'var' variable? 'var' declares a function-scoped variable (reassignable, hoisted).
//! Example: Accessible throughout the function, but not outside.
function printWithVar () {
    var number = 20;  // Function-scoped to this function.
    console.log( number );  // Output: 20
}

// printWithVar();  // Uncomment to run: Outputs 20
// console.log(number);  // ❌ ERROR: ReferenceError: number is not defined
//                       (Cannot access outside the function)

//! To show function-scoping difference (leaks from inner blocks):
function demoVarBlockScope () {
    var y = 3;
    if ( true ) {
        var y = 4;  // Reassigns outer y (no new scope; function-scoped).
        console.log( y );  // Output: 4
    }
    console.log( y );  // Output: 4 (changed outer y)
}
demoVarBlockScope();  // Outputs: 4 then 4

console.log( "-------------" );

//! const
//! What is a 'const' variable? 'const' declares a block-scoped constant (cannot reassign/redeclare, must initialize).
//! Example: Only accessible inside the block; immutable value.
function printWithConst () {
    const name = "John";  // Must initialize here; block-scoped.
    console.log( name );  // Output: John

    // name = "Jane";  // ❌ ERROR: TypeError: Assignment to constant variable.
    // const name = "Jane";  // ❌ ERROR: SyntaxError: Identifier 'name' has already been declared.
}

// printWithConst();  // Uncomment to run: Outputs John
// console.log(name);  // ❌ ERROR: ReferenceError: name is not defined

//! To show block-scoping (like 'let'):
function demoConstBlockScope () {
    const z = 5;
    if ( true ) {
        const z = 6;  // New 'const' shadows outer z.
        console.log( z );  // Output: 6
    }
    console.log( z );  // Output: 5 (outer z unchanged)
}
demoConstBlockScope();  // Outputs: 6 then 5

console.log( "-------------" );