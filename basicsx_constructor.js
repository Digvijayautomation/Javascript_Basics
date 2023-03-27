class person{


// parameterrized constructor
constructor(fname, lname)
{
 this.fname=fname
 this.lname=lname

}
//Method

fullname()
{
    console.log(this.fname + this.lname)
}


}


//creating object and passing values to constructor
let p=new person("Digvijay", "Tikka") 
let p1=new person("Pratiksha","Tikka")

console.log(p.fullname()) // printing method
console.log(p1.fullname())