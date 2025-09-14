//! JavaScript is a functional programming language.

//! function declaration
function addition ( a, b ) {
    return a + b;
}

let additionResult = addition( 2, 3 )
console.log( additionResult );
console.log( "-----------------------------------------" );

//! In JavaScript, functions are treated as first class citizens.

//! What this first class citizen means is that functions can be stored in variables, passed as arguments to other functions, and returned from other functions

//! 1. functions can be stored in variables
const subtraction = function ( a, b ) {
    return a - b;
}

let subtractionResult = subtraction( 3, 2 )
console.log( subtractionResult );
console.log( "-----------------------------------------" );

//! 2. functions can be passed as arguments to other functions
function demo ( value ) {
    console.log( value ); //! we will see it's printing an anonymous function
}

demo( function () { } );

//! example:
function calculate ( operation, a, b ) {
    return operation( a, b ); //! this operation parameter is taking the addition function as a parameter
}

let calculationResult = calculate( addition, 3, 2 ); //! here, the addition function is being passed as an argument to the calculate function
console.log( calculationResult );
console.log( "-----------------------------------------" );

//! 3. functions can return other functions -> This is also called higher order functions
function createGreeting ( greeting ) {
    return function ( name ) {
        console.log( `${ greeting } ${ name }` );
    };
}

const greet = createGreeting( "Hello" );
greet( "John" ); //! we will see that Hello John is printed in the console
console.log( "-----------------------------------------" );