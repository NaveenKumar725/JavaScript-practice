
let p=new promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("i am a promise, i fulfilled")
        resolve(true)

    },5000)
})
// console.log(p)


let p1=new promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
    
        console.log("i am a promise, i am rejected")

        reject(new error("i am an error"))
    },5000)
})
// console.log(p,p1)
p1.then((value)=>{
    console.log(value)
})