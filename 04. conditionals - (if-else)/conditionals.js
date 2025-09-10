//! if-else
let weather = 'sunny';

if ( weather === 'sunny' ) {
    console.log( 'Wear sunglasses!' );
} else {
    console.log( 'Wear a raincoat!' );
}

//! if-elseif-else
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