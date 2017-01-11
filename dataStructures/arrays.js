// Creating Array Objects
var emptyArray = [];

var thingsIPhotograph = ["Nature", "Street"];
thingsIPhotograph[2] = "People"; // valid way to add item to array

var randomValidArray = [true, "Some Text", 10];

var arrayIn2D = [
  ["col1A", "col2A"],
  ["col1B", "col2B"],
  ["col1C", "col2C"]
];

// Adding and removing to/from back of Array
thingsIPhotograph.push("Urban Exploration"); // better way of adding an item to array
var category = thingsIPhotograph.pop(); // removing item

// Adding and removing to/from front of Array
randomValidArray.unshift("red"); // add
var removedItem = randomValidArray.shift(); // remove

// Finding indexOf an element, returns -1 if non-existent
thingsIPhotograph.indexOf("Birds"); // -1
thingsIPhotograph.indexOf("People"); // 2

// Array slicing
var copyOfThingsIPhotograph = thingsIPhotograph.slice();
var subsetOfThingsIPhotograph = thingsIPhotograph.slice(1,3);
