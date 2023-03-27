class person{

//properties of class
    age=25;

// we can also define properties as getters methods
//using get keyword
        get location()
        {
            return "pune"
        }
}

// Object of class

let p=new person()

console.log(p.age)

console.log(p.location)