//! for-in loop works with arrays and objects. It will iterate over the values of the array or object and give you the index value.


//! for string it will work, as it will only provide the index value
let name = "Harry"

for ( let char in name ) {
    console.log( char )
}

console.log( "----------" )

//! for array it will will only provide the index value
let names = [ "Harry", "Ron", "Hermione" ]

for ( let index in names ) {
    console.log( index )
}

console.log( "----------" )

//! for object it will provide the key value
let person = {
    name: "Harry",
    age: 25,
    city: "London"
}

for ( let key in person ) {
    console.log( key )
    console.log( person[ key ] )
    console.log( '----------' )
    console.log( person.name ) //! to access the value of the object
    console.log( person.age )
    console.log( person.city )
    console.log( '----------' )
    console.log( person[ 'name' ] ) //! to access the value of the object -> another way
    console.log( person[ 'age' ] )
    console.log( person[ 'city' ] )
    console.log( '----------' )
}

//! for object it will provide the key value
let persons = [
    {
        name: "John",
        age: 25,
        city: "London"
    },
    {
        name: "Jane",
        age: 20,
        city: "New York City"

    }
]

for ( let key in persons ) {
    console.log( key )
    console.log( persons[ key ].name )
    console.log( persons[ key ].age )
    console.log( persons[ key ].city )
    console.log( '----------' )
}