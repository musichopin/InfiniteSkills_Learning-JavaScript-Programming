// Document Object Model selectors

console.log( "intro ID", document.getElementById("intro") );

console.log( "p tags", document.getElementsByTagName("p") );

console.log( "highlight class", document.getElementsByClassName("highlight") );

console.log( "ul > li", document.querySelector("ul > li") );
console.log( "ul > li", document.querySelectorAll("ul > li") );

var header = document.getElementsByTagName("header")[0];
var ptags = header.getElementsByTagName("p");
console.log( "header p", ptags );