
// We can use sort method directly on strings but not for int

//string will give correct result
let fruits=["Banana","Mango","Orange","Apple"]
fruits.sort() 
console.log(fruits)


//int will give incorrect result
let nums=[10,85,04,98,1,5]
nums.sort() 
console.log(nums)

//so for int we have to use custom method
let nums2=[10,85,04,98,1,5]
console.log(nums2.sort((a,b)=> a-b))




