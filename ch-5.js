
//Question-1
//add number in an array
let arr=[1,2,3,4,5,6]
let a=prompt("Enter a number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr);

//Question-2
//enter a number continuously until user not enter 0
let arr1=[1,2,3,4,5,6]
do{
    let b=prompt("Enter a number")
    b=Number.parseInt(b)
    arr.push(b)
}while(b !=0)

console.log(arr1);


//Question-3
//check which number is divisible by 10 in an array an store in another array by using filter
let arr3=[10,2,30,4,5,60]
let neww=arr3.filter((x)=>{
    return x%10==0
})
console.log(neww)

//question-4
//print a square of an array by using map()
let arr4=[10,2,30,4,5,60]
let n=arr4.map((x)=>{
    return x*x
})
console.log(n)

//question-5
//print a mulplication of whole array by using reduce method
let arr5=[10,2,30,4,5,60]
let n1=arr5.reduce((x1, x2)=>{
    return x1*x2
})
console.log(n1)