var marks=[10,20,30,40,50]
var sum=0
for(let i=0; i<marks.length;i++)
{
sum =sum + marks[i]  
}
console.log(sum)


//Using Reduce Method to add the numbers in array
//used when we want to iterate and update the values
var marks1=[20,40,60,80,100]
let total_marks=marks1.reduce((sum, mark)=>sum+mark,0)
console.log(total_marks)


//Using Filter Method
//used when apply the filter
 var numbers=[1,2,3,4,5,6,7,8,9,10]
 let even_numbers=numbers.filter(numbers=>numbers%2==0)
 console.log(even_numbers)