//! There are four types of functions :

//* 1. Function Declaration -> normal function, can be hoisted
function greet () {
    console.log( "Hello World" );
}

greet(); // Hello World

//* 2. Function Expression -> stored in a variable, not hoisted
const greet2 = function () {
    console.log( "Hello World" );
};

greet2(); // Hello World

//* 3. Arrow Function -> shorter syntax, introduced in ES6
const greet3 = () => {
    console.log( "Hello World" );
}

greet3(); // Hello World

//* 4. Anonymous Function -> function without a name, often used in expressions
setTimeout( function () {
    console.log( "Timer is done" );
}, 1000 );


//* 5. IIFE Function -> invoked automatically. runs as soon as it's defined
( function () {
    console.log( "IIFE" );
} )()