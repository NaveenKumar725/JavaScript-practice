//Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  callback();
  document.body.appendChild(script);
}

// script.onerror=function(){
//     console.log("Error handling with SRC"+src);
//}

function hello() {
  alert("Good Morning, I am JavaScript");
}
// loadScript("test.js")



// loadScript(document.write("Hello"))
loadScript("test.js", function hello() {
  alert("Good Morning, I am JavaScript");
},loadScript("test.js",function hello() {
    alert("Good Morning, I am JavaScript");
  },loadScript("test.js",function hello() {
    alert("Good Morning, I am JavaScript");
  },loadScript("test.js",function hello() {
    alert("Good Morning, I am JavaScript");
  },loadScript("test.js",function hello() {
    alert("Good Morning, I am JavaScript");
  });
