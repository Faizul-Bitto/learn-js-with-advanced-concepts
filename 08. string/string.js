let name = 'Mike';

console.log( "My name is " + name + "!" ); // Concatenation
//! With object literal
console.log( `My name is ${ name }!` );

let a = 5;
let b = 10;
console.log( `${ a } + ${ b } = ${ a + b }` );
console.log( "\n\n" );

//! Finding string length
console.log( "Hello World".length );
console.log( name.length );
console.log( "\n\n" );

//! Accessing characters
let name2 = "John"
console.log( name2[ 0 ] ); // First character: "J"
console.log( name2[ 1 ] = "Z" ); // Assignment returns "Z", but string unchanged
console.log( name2[ 1 ] ); // Still "o" - strings are immutable!
console.log( name2 ); // Prove the string is still "John"
console.log( name2[ name2.length - 1 ] ); // Last character: "n"
console.log( "\n\n" );

//! Looping through a string -> print every character
for ( let char of name2 ) {
    console.log( char );
}

for ( let char in name2 ) {
    console.log( char );
}
console.log( "\n\n" );

/*
    Strings Properties & Methods :

    // property
    str.length;

    // methods
    str.toUpperCase();
    str.lowerCase();
    str.trim();
    str.concat( str2 );
    str.indexOf( "x" );
    str.includes( "x" ); // returns true or false -> boolean
    str.charAt( 0 );
    str.replace( "x", "y" ) // replace first 'x' with 'y'
    str.replaceAll( "x", "y" ); // replace all 'x' with 'y'
    str.slice( 0, 3 );
    str.split( "x" )
*/

//! Examples :
let str = "Hello";
let str2 = "World!";

console.log( str.length );
console.log( str.toUpperCase() );
console.log( str.toLowerCase() );
console.log( str.trim() );
console.log( str.concat( " " + str2 ) );
console.log( str.indexOf( "l" ) );
console.log( str.includes( "l" ) );
console.log( str.charAt( 0 ) );
console.log( str.replace( "l", "z" ) );
console.log( str.replaceAll( "l", "z" ) );
console.log( str.slice( 0, 2 ) );
console.log( str.split( "l" ) );