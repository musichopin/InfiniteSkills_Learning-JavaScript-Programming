// method 1 = we are making series of small changes to the DOM
// and every time a small change is made browser needs to refresh 
// the layout of the page

// Creating new nodes
var article = document.getElementsByTagName("article")[0];

// append a p element
var p = article.appendChild( document.createElement("p") );

// append text
p.appendChild( document.createTextNode("My "));

// append a strong element with text
p.appendChild( document.createElement("strong") ).appendChild( document.createTextNode("third") );

// append text
p.appendChild( document.createTextNode(" paragraph.") );

// modify attributes
p.id = "p3";
p.setAttribute("style", "font-style:italic;");


// method 2 = create document fragment (more efficient way)
// we build new nodes in memory and add to DOM when they are ready

var f = document.createDocumentFragment(); // just a hole waiting for DOM nodes
var q = f.appendChild( document.createElement("p") );
q.appendChild( document.createTextNode("My "));
q.appendChild( document.createElement("strong") ).appendChild( document.createTextNode("fourth") );
q.appendChild( document.createTextNode(" paragraph.") );
q.id = "p4";

// // until now we created fragment in memory, 
// // a node which doesn't exist on page, but still exists.
// // append fragment to the end:
// article.appendChild(q);


// child-node at the beginning:
// takes 2 arguments: the node we want to insert and reference node 
// which will become the next sibling
article.insertBefore(q, article.firstChild);
// q fragment is inserted before the first child

// // insert q fragment just before the 3rd element
// article.insertBefore(q, article.getElementsByTagName("p")[2]);

// ***node is a single reference to an html DOM object, 
// so it cannot possibly exist two places same time, in other words
// when we create a new DOM it can only be used once. 
// we can solve this problem by cloning an existent node***

// clone node and children and modify
var r = q.cloneNode(true); // *create element/node*
r.id = "p5"; // *create id* 
r.appendChild( document.createTextNode(" Again.") ); // *create content*

// append before third p tag
article.insertBefore(r, article.getElementsByTagName("p")[2]); // *insert cloned element* 