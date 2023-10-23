
let promise=new Promise(function(resolve, reject){
    alert("Hello")
    resolve(56)
})
console.log("i am first")
setTimeout (function(){
    console.log("I am settimeout")
},2000)
console.log("i am last")