setTimeout( () => {
    console.log( "timeout" );
}, 2000 );

//! 6-9 will run first as setTimeout is async
let result1 = 2;
let result2 = 3;
console.log( "result 1 : ", result1 );
console.log( "result 2 : ", result2 );