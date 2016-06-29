// Document Object Model navigation

console.clear();
var n = document.getElementsByTagName("ul")[0];
console.log( "ul node", n);

console.log( "nodeName", n.nodeName );
console.log( "nodeType", n.nodeType );

console.log( "parentNode", n.parentNode );

console.log( "childNodes", n.childNodes );
console.log( "childNodes.length", n.childNodes.length );

console.log( "li childNodes", n.getElementsByTagName("li") );

console.log( "real childNodes", ElementNodes(n.childNodes) );

// console.log( "previousSibling", n.previousSibling );
// console.log( "nextSibling", n.nextSibling );

console.log( "real previousSibling", Sibling(n, "previousSibling") );
console.log( "real nextSibling", Sibling(n, "nextSibling") );


// return real DOM nodelist
function ElementNodes(nodelist) {
	var eNodes = [];

	for (var i=0, j=nodelist.length; i < j; i++) {
		if (nodelist[i].nodeType == 1) {
			eNodes.push(nodelist[i]);
		}
	}

	return eNodes;
}


// return real sibling (or null)
function Sibling(node, type) {

	do {
		node = node[type];
	} while (node && node.nodeType != 1);

	return node;

}