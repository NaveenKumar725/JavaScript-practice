


// async function Healthcrad(){
//     return 5
// }

// Healthcrad().then((x)=>{
// console.log(x)
// })


async function Healthcrad() {

    let DelhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 Deg")
        }, 1000)
    })


    let MumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("10 Deg")
        }, 2000)
    })

    // DelhiWeather.then(alert)
    // MumbaiWeather.then(alert)
    console.log("Fetching Delhi weather please wait...")
    let delhiW = await DelhiWeather
    console.log("Fetched" + delhiW)
    console.log("Fetching Mumbai weather please wait...")
    let mumbaiW = await MumbaiWeatherWeather
    console.log("Fetched" + mumbaiW)
    return [delhiW, mumbaiW]
}
let a = Healthcrad()
a.then((value) => {
    console.log(value)
})

