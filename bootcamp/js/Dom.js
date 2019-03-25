var id = document.getElementById("highlight");  //return an element of elements
var tag = document.getElementsByTagName("li");// returns an array of elements
var query = document.querySelector(".now .bold");
var queryAll = document.querySelectorAll(".bold");// returns an array of elements
var para = document.getElementsByTagName("p");// returns an array of elements

var addclass = document.getElementsByTagName("h1");// returns an array of elements

addclass[0].classList.toggle("toggle");
var now = document.getElementsByTagName("p");// returns an array of elements
console.log(now[0].textContent);

now = document.querySelector("ul");
// now.textContent="kjfdje";
console.log(now.textContent);      //

var inHtml = document.body.innerHTML  //return all html elements
var inText = document.body.textContent //retun all text in html

// inHtml = document.body.textContent = "<h1>hello</h1>";  // doesn't  work
// inHtml = document.body.innerHTML = "<h1>hello</h1>";    // do the work


var attr = document.querySelector("a");
attr.getAttribute("href");      //check href of a tag
console.log(attr);
attr.setAttribute("href", "https://developer.mozilla.org/en-US/");

// createElemntById

/*  custom change*/

var allDiv = document.getElementsByTagName("form");
for (var i = 0; i < allDiv.length; i++) {
    allDiv[i].style.display = "none";
}

var links = document.querySelector("a");

for (var i = 0; i < links.length; i++) {         //get all text on a
    print(links[i].textContent);
}

var links = document.querySelectorAll(".main-content .goto");       //  element inside elemnt
for (var i = 0; i < links.length; i++) {



}


