

//Synchronous programming
// let a=prompt("What is your name");
// let b=prompt("What is your age");
// let c=prompt("What is your fav color");
// console.log("My name is "+a+ "and i am "+b+" year old"+" my favourite color is "+c);


// //Asynchronous programming
// console.log("Start");
// console.log("My name is Naveen");

// setTimeout(function(){
//     console.log("I will execute end of the all program")
// },3000)

// console.log("I am from Samastipur,Bihar");
// console.log("End");

//Callbacks
function loadScript(src, callback){
    var script=document.createElement("script");
    script.src=src;
    callback();
    document.body.appendChild(script);

}


// script.onerror=function(){
//     console.log("Error handling with SRC"+src);
 //} 

function hello(){
    alert("Good Morning, I am JavaScript")
}
// loadScript("test.js")
// loadScript(document.write("Hello"))
loadScript("test.js", hello)