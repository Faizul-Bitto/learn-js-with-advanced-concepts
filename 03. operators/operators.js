//! operators:

//? Arithmetic Operators:
//? +, -, *, /, %, **
let result = 5 + 3; //! 5 & 3 are operands. + is operator
console.log( result );

let result2 = 5 - 3; //! 5 & 3 are operands. - is operator
console.log( result2 );

let result3 = 5 * 3; //! 5 & 3 are operands. * is operator
console.log( result3 );

let result4 = 5 / 3; //! 5 & 3 are operands. / is operator
console.log( result4 );

let result5 = 5 % 3; //! 5 & 3 are operands. % is operator
console.log( result5 );

let result6 = 5 ** 3; //! 5 & 3 are operands. ** is operator
console.log( result6 );

console.log( "\n" );

//? Logical Operators:
//? &&, ||, !

//? Relational Operators:
//? ==, ===, !=, !==, <, >, <=, >=
let a = 10;
let b = "10";
console.log( a == b ); //! == checks only the value
console.log( a === b ); //! === checks the value as well as the data type (checks the type first then value)
console.log( a != b ); //! != checks only the value
console.log( a !== b ); //! !== checks the value as well as the data type (checks the type first then value)
console.log( a < b );
console.log( a > b );
console.log( a <= b ); //! <= checks only the value
console.log( a >= b ); //! >= checks only the value

console.log( "\n" );

//? Increment/Decrement Operators:
//? ++, --
let counter = 0;
counter++; //! counter = counter + 1
console.log( counter );
counter--; //! counter = counter - 1
console.log( counter );

console.log( "\n" );

//? Assignment Operators:
//? =, +=, -=, *=, /=, %=, **=
let x = 5;
x += 3; //! x = x + 3
console.log( x );
x -= 3; //! x = x - 3
console.log( x );
x *= 3; //! x = x * 3
console.log( x );
x /= 3; //! x = x / 3
console.log( x );
x %= 3; //! x = x % 3
console.log( x );
x **= 3; //! x = x ** 3
console.log( x );

console.log( "\n" );

//? Bitwise Operators:
//? &, |, ~, <<, >>
let e = 5;
let f = 3;
console.log( e & f );
console.log( e | f );
console.log( ~e );
console.log( e << 2 );
console.log( e >> 2 );

console.log( "\n" );

//? Ternary Operator:
//? condition ? true : false
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log( canVote );

console.log( "\n" );

//? Nullish Coalescing Operator:
//? ??
let name = null;
name ??= "John"; //! ?? -> checks if the left operand is null or undefined. If it is, it assigns the right operand to the left operand
console.log( name );

console.log( "\n" );

//? Spread Operator:
//? ...
let arr1 = [ 1, 2, 3 ];
let arr2 = [ 4, 5, 6 ];
let arr3 = [ ...arr1, ...arr2 ]; //! ... -> spread operator
console.log( arr3 );

console.log( "\n" );

//? Rest Operator:
//? ...
function sum ( ...numbers ) { //! ... -> rest operator
    let total = 0;
    for ( let number of numbers ) {
        total += number;
    }
    return total;
}

let sumValue = sum( 1, 2, 3, 4, 5 );

console.log( sumValue );

console.log( "\n" );

//? Optional Chaining Operator:
//? ?.
let user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
let street = user?.address?.street;
console.log( street ); //! ?. -> optional chaining operator