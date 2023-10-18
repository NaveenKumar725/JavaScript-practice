
//Question-1
//objects creation of marks(some students)
let marks={
    raja:50,
    shubham:75,
    prince:96,
    vikash:55
}
//get values by using for loop of students
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " +Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}


//question-2
//get values by using for in loop of students
for(let i in marks){
    console.log("The marks of " +i+" are "+marks[i])
}


//question-3
//enter a number until conditional will not satisfied of correct number
let cn=3;
let i
while(i !=cn){
   i= prompt("Enter a number")
}
console.log("you have entered correct number")


//question-4
//find a mean of four number by using function
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(10,20,30,40,50))