
//insertion method
 let a=document.getElementsByTagName("div")[0];
// a.innerHTML=a.innerHTML+'<h1>Hello World!</h1>';


let div =document.createElement("div");
div.innerHTML='<h1>Hello I am Written by JavaScript</h1>';

//this will go end of the container
// a.appendChild(div);

//this will append just after  the container(container first child)
// a.prepend(div);

//this will append just before  the container
// a.before(div);

//this will append just after  the container
// a.after(div);

//it will take place of container(container will remove)
a.replaceWith(div);