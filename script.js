const body = document.body;

const navbar =
document.getElementById("navbar");

const toggle =
document.getElementById("themeToggle");

const nav =
document.getElementById("navLinks");

const mobile =
document.getElementById("mobileToggle");

const form =
document.getElementById("contactForm");

const success =
document.getElementById("formSuccess");

const typing =
document.getElementById("typing");

function updateNavbar(){

if(window.scrollY > 30){

navbar
.classList
.add(
"scrolled"
);

}
else{

navbar
.classList
.remove(
"scrolled"
);

}

}

window.addEventListener(
"scroll",
updateNavbar
);





function toggleMenu(){

nav
.classList
.toggle(
"open"
);

}

if(mobile){

mobile.addEventListener(
"click",
toggleMenu
);



mobile.addEventListener(
"keydown",

(e)=>{

if(
e.key==="Enter"
||
e.key===" "
){

toggleMenu();

}

}

);

}




document
.querySelectorAll(
".nav-links a"
)

.forEach(

link=>{

link.addEventListener(

"click",

()=>{

nav
.classList
.remove(
"open"
);

}

);

}

);
const sections =
document.querySelectorAll(
"section"
);

const links =
document.querySelectorAll(
".nav-links a"
);

function activateNav(){

let current =
"";

sections.forEach(

(section)=>{

const top =
section.offsetTop;

if(

scrollY >=
top - 180

){

current =
section.id;

}

}

);

links.forEach(

(link)=>{

link
.classList
.remove(
"active"
);

if(

link
.getAttribute(
"href"
)

===

`#${current}`

){

link
.classList
.add(
"active"
);

}

}

);

}

window.addEventListener(
"scroll",
activateNav
);





