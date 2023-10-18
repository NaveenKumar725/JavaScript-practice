//Q-1
//check whether a number lies or not between 10 or 20 
let age= prompt("Enter your age")
if(age>10 && age<20){
    console.log("your age is lies between 10 and 20")
}else{
    console.log("your age is not lies between 10 and 20")
}


//Question-2
//check is the age of the user by using switch case
let age1=prompt("Enter your age")
age=Number.parseInt(age1)
switch(age1){
    case '12':
        console.log("your age is 12")
        break;
    case '13':
        console.log("your age is 13")
         break;
    case '14':
        console.log("your age is 14")
         break;
    case '15':
         console.log("your age is 15")
         break;
    case '16':
        console.log("your age is 16")
         break;
    default:
        console.log("another")
        
}

//Question-3
//check whether a number divisible by 2 and 3 by using logical operator
let num5=prompt("Enter your number")
num=Number.parseInt(num5)
if(num5%2==0 && num5%3==0){
    alert("number divisible by 2 or 3")
}else{
    alert("not divisible")
}


//Question 
//check whether a number divisible by 2 either 3 by using logical operator
let num=prompt("Enter your number")
num=Number.parseInt(num)
if(num%2==0){
    console.log("number divisible by 2")
}if(num%3==0){
    alert("number divisible by 3")
}else{
    console.log("not divisible")
}


//Question-5
//print who can drive
let num1=50;
if(num>18){
    console.log("You can drive")
}else{
    console.log("you can not drive")
}