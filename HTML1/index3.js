
// alert("Hello")

//setTimeout function will stop the execution of program for given time
//  let a=setTimeout(function(){
//     alert("I am inside of setTimeout")
//  } ,4000)

//it will clear settimeout function
// clearTimeout(a);
// console.log(a);

// let b=prompt("Do you want to execute the above function y/n")
// if("n" ==b){
//     clearTimeout(a)
// }


const sum=(a,b)=>{
    console.log("Yes I am running..."+(a+b))
    return a+b

}

setTimeout(sum, 2000, 1,2)

//it will run again and again the program at the given time
// let c=setInterval(sum,1000,5,6)
//it will clear the setInterval time
clearInterval(c)