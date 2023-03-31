//Accessing the parent class properties 
const employee=require("./basicsx1_inheritance_parent.js")

class child extends employee // Extending the parent class
{

}


let c=new child()
console.log(c.emp_id)

console.log(c.empname)