let p1=new Promise((resolve,reject)=>{
    console.log("Hey i am not resolved")
    setTimeout(()=>{
        resolve(1)
    },2000)
})
p1.then(()=>{
    console.log("congratulations i am resolved")
})
p1.then(()=>{
    console.log("finally full statements resolved")
})