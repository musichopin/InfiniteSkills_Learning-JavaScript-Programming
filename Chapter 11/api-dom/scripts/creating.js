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

// create document fragment
var f = document.createDocumentFragment();
var q = f.appendChild( document.createElement("p") );
q.appendChild( document.createTextNode("My "));
q.appendChild( document.createElement("strong") ).appendChild( document.createTextNode("fourth") );
q.appendChild( document.createTextNode(" paragraph.") );
q.id = "p4";

// append fragment as first child
article.insertBefore(q, article.firstChild);

// clone node and children and modify
var r = q.cloneNode(true);
r.id = "p5";
r.appendChild( document.createTextNode(" Again.") );

// append before third p tag
article.insertBefore(r, article.getElementsByTagName("p")[2]);