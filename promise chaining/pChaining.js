
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I will resolve after 2 seconds")
        resolve(56)
    }, 2000)
})

p1.then((value) => {
    console.log(value)

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("resolve promise 2")

        }, 2000)

    })
    return p2
}).then((value)=> {
    console.log("we are done")
    return 2
}).then((value) => {
    console.log("All done")
})