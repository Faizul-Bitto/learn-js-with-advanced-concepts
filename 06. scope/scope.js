/*
    Scope in JavaScript - Where can you access variables and functions?
	
    Types of Scope:
    1. Global Scope - accessible everywhere
    2. Function Scope - accessible only inside the function
    3. Block Scope - accessible only inside the block {}
*/

console.log( "=== JavaScript Scope Examples ===" );

// ==================== 1. GLOBAL SCOPE ====================
// Variables declared outside any function = GLOBAL
var globalVar = "I'm global";
let globalLet = "I'm also global";

function globalFunction () {
    console.log( "I'm a global function" );
}

console.log( "\n--- Global Scope ---" );
console.log( globalVar );     // ✅ Can access
console.log( globalLet );     // ✅ Can access
globalFunction();           // ✅ Can access

// ==================== 2. FUNCTION SCOPE ====================
function myFunction () {
    // Variables inside function = FUNCTION SCOPE
    var functionVar = "I'm inside function";
    let functionLet = "Me too";

    console.log( "\n--- Inside Function ---" );
    console.log( globalVar );     // ✅ Can access global
    console.log( functionVar );   // ✅ Can access own

    function innerFunction () {
        var innerVar = "I'm in inner function";
        console.log( "\n--- Inside Inner Function ---" );
        console.log( globalVar );     // ✅ Can access global
        console.log( functionVar );   // ✅ Can access parent function
        console.log( innerVar );      // ✅ Can access own
    }

    innerFunction();

    // console.log(innerVar);      // ❌ ERROR! Can't access inner function variables
}

myFunction();

// console.log(functionVar);      // ❌ ERROR! Can't access function variables outside
// console.log(functionLet);      // ❌ ERROR! Can't access function variables outside

// ==================== 3. BLOCK SCOPE ====================
function blockScopeExample () {
    console.log( "\n--- Block Scope Example ---" );

    var functionScoped = "I'm function scoped";

    if ( true ) {
        // Variables inside {} = BLOCK SCOPE (only let/const)
        var varInBlock = "I'm var in block";
        let letInBlock = "I'm let in block";
        const constInBlock = "I'm const in block";

        console.log( "Inside block:" );
        console.log( functionScoped );    // ✅ Can access
        console.log( varInBlock );        // ✅ Can access
        console.log( letInBlock );        // ✅ Can access
        console.log( constInBlock );      // ✅ Can access
    }

    console.log( "Outside block:" );
    console.log( functionScoped );        // ✅ Can access
    console.log( varInBlock );            // ✅ Can access (var ignores blocks!)
    // console.log(letInBlock);         // ❌ ERROR! let respects blocks
    // console.log(constInBlock);       // ❌ ERROR! const respects blocks
}

blockScopeExample();

// ==================== 4. SIMPLE EXAMPLES ====================
console.log( "\n--- Simple Examples ---" );

// Example 1: Function can't access other function's variables
function functionA () {
    var secretA = "Secret from A";
}

function functionB () {
    var secretB = "Secret from B";
    // console.log(secretA);           // ❌ ERROR! Can't access secretA
}

functionA();
functionB();

// Example 2: Loop variables
console.log( "\n--- Loop Variables ---" );

for ( var i = 0; i < 3; i++ ) {
    console.log( "var i:", i );
}
console.log( "After loop, var i:", i ); // ✅ Still accessible (i = 3)

for ( let j = 0; j < 3; j++ ) {
    console.log( "let j:", j );
}
// console.log("After loop, let j:", j); // ❌ ERROR! j not accessible

console.log( "\n=== End of Examples ===" );
