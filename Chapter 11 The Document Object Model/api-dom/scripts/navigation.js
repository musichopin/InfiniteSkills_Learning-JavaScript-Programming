// Document Object Model navigation

console.clear();
var n = document.getElementsByTagName("ul")[0];
console.log( "ul node", n); // prints "ul node <ul>"

console.log( "nodeName", n.nodeName ); // prints "nodeName UL"
console.log( "nodeType", n.nodeType ); // prints "nodeType 1"
// 1 means we got a proper element and 3 is a text node

console.log( "parentNode", n.parentNode ); // prints "parentNode <article>"



console.log( "childNodes", n.childNodes ); // text node and text item one another
// prints, childNodes NodeList [ #text "<ul>
		// 	", <li>, #text "
		// 	", <li>, #text "
		// 	", <li.highlight>, #text "
		// </ul>" ] 
console.log( "childNodes.length", n.childNodes.length ); // prints "childNodes.length 7"
// there are 7 child notes because of 4 white space nodes besides 3 standard element nodes

// solution 1 for handling white spaces
console.log( "li childNodes", n.getElementsByTagName("li") );
// prints " li childNodes HTMLCollection [ <li>, <li>, <li.highlight> ] "

// sol 2 for white spaces (more efficient)
console.log( "real childNodes", ElementNodes(n.childNodes) );
// prints "real childNodes Array [ <li>, <li>, <li.highlight> ]"



// previous sibling and next sibling locate text node white space
console.log( "previousSibling", n.previousSibling );
// prints, previousSibling #text "
//
// " 
console.log( "nextSibling", n.nextSibling );
// prints, nextSibling #text "
//
// </article>"


console.log( "real previousSibling", Sibling(n, "previousSibling") );
// prints, real previousSibling <p class="highlight">
console.log( "real nextSibling", Sibling(n, "nextSibling") );
// prints, real nextSibling null


// return real DOM nodelist
// we go through every node in our collection
function ElementNodes(nodelist) {
	var eNodes = []; // return array is defined

	for (var i=0, j=nodelist.length; i < j; i++) {
		if (nodelist[i].nodeType == 1) { // if nodelist is real element
			eNodes.push(nodelist[i]); // push the nodelist into our eNodes array
		}
	}

	return eNodes;
}


// return real sibling (or null)
function Sibling(node, type) {

	do {
		node = node[type];
	} while (node && node.nodeType != 1);
	// while there is a node to go to (not null) and it is a proper element
	// stop execution of the loop

	return node;

}