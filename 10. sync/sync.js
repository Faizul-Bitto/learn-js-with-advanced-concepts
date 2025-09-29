for ( let i = 0; i < 10000; i++ ) {
    console.log( i );
} //! This loop will be executed 10000 times. It will take time. Still, this loop will be executed first then line no. 6-9 will be executed. So, JS is not by default asynchronous language. If it was by default asynchronous, then line no. 6-9 will be executed first, then the loop. That means, it is blocking the thread now for a high computational task of running a loop 10000 times.

//! 6-9 will remain blocked for the for loop
let result1 = 2;
let result2 = 3;
console.log( "result 1 : ", result1 );
console.log( "result 2 : ", result2 );