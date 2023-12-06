/* 
//finds element by id
document.getElementById(id)

//finds elements by class name
document.getElementsByClassName(name)

//finds elements by tag name
document.getElementsByTagName(name)
 */
/* let elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";

let arr = document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi"; */

let array = document.getElementsByTagName("p");
for (let x = 0; x < array.length; x++) {
  array[x].innerHTML = "Hi there";
}
/* 
element.childNodes returns an array of an element's child nodes.

element.firstChild returns the first child node of an element.

element.lastChild returns the last child node of an element.

element.hasChildNodes returns true if an element has any child nodes, otherwise false.

element.nextSibling returns the next node at the same tree level.

element.previousSibling returns the previous node at the same tree level.

element.parentNode returns the parent node of an element.
 */