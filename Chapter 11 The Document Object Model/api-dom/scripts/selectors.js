// Document Object Model selectors

console.log( "intro ID", document.getElementById("intro") );

// returns array (a collection of nodes)
console.log( "p tags", document.getElementsByTagName("p") );

console.log( "highlight class", document.getElementsByClassName("highlight") );


// multiple tags, returns nodes
console.log( "ul > li", document.querySelector("ul > li") ); // finds 1st node
console.log( "ul > li", document.querySelectorAll("ul > li") ); // finds all nodes

// similar: returns collection
var header = document.getElementsByTagName("ul")[0];
var ptags = header.getElementsByTagName("li");
console.log( "ul li", ptags );

// complex selection: get all the p tags within h tag
// theoritically this can return collection returning
// more than 1 header, so we select the 1st one:
var header = document.getElementsByTagName("header")[0];
var ptags = header.getElementsByTagName("p");
console.log( "header p", ptags );
// collection is updated every time a paragraph tag is inserted into the page itself

// similar:
console.log( "header p", document.querySelectorAll("header > p") ); // finds all nodes
console.log( "header p", document.querySelector("header > p") ); // finds 1st node

/*
intro ID <p id="intro">
p tags HTMLCollection [ <p>, <p#intro>, <p.highlight> ]
highlight class HTMLCollection [ <p.highlight>, <li.highlight> ]
ul > li <li>
ul > li NodeList [ <li>, <li>, <li.highlight> ]
ul li HTMLCollection [ <li>, <li>, <li.highlight> ]
header p HTMLCollection [ <p> ]
header p NodeList [ <p> ]
header p <p>
*/