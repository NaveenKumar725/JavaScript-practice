//change card title to red
//get element by classname
let ctitle=document.getElementsByClassName("card-title1")[0]
ctitle.style.color="red"

//get element by queryselector
let cctitle=document.querySelectorAll(".card-title")
console.log(cctitle)
cctitle[0].style.color="yellow"
cctitle[1].style.color="green"


//direct indivisual implementation
document.querySelector(".miss").style.background="yellow"

//get element by tag name
let h1=document.getElementsByTagName("h1")
h1[0].style.background="green"
h1[0].style.color="white"



