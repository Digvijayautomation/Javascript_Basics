var marks=[10,20,30,40,50]
var sum=0
for(let i=0; i<marks.length;i++)
{
sum =sum + marks[i]  
}
console.log(sum)


//Using Reduce Method to add the numbers in array
//used when we want to iterate and update the values
//Using reduce insted of for loop 
// We can do everything in single line
var marks1=[20,40,60,80,100]
let total_marks=marks1.reduce((sum, mark)=>sum+mark,0) // for 1st itretion sum=0 and mark is like i in for loop 
console.log(total_marks)


//Using Filter Method
//used when need to apply the filter
 var numbers=[1,2,3,4,5,6,7,8,9,10]
 let even_numbers=numbers.filter(numbers=>numbers%2==0) // filter out the number which is %2=0
 console.log(even_numbers)


 // Using Map
 var numbers2=[1,2,3,4,5]
 let Mapped_even_numbers=numbers2.map(numbers2=>numbers2*3) // multiply every number by 3
 console.log(Mapped_even_numbers)



 // We can also use all methods together

var num1=[20,40,60,80,100]
let tot=num1.filter(num1=>num1%2==0).map(num1=>num1*3).reduce((sum1, num)=>sum1+num,0)
console.log(tot)