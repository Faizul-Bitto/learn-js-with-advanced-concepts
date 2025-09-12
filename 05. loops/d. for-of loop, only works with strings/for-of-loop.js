//! for-of loop only works with strings. It extracts each character from the string on each iteration.

let name = "John Doe"

for ( let char of name ) {
    console.log( char )
}