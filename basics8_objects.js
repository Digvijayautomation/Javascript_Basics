//object is collection of properties

//Creating object
let person={

    fname:"Digvijay",  // properties of object
    lanme:"Tikka"
            }

console.log(person)

// adding extra propertirs
person.gender="Male"
console.log(person)

//Update the properties
person.fname="Pratiksha"
person.gender="Female"
console.log(person)

//Deleting the properties
delete person.gender
console.log(person)