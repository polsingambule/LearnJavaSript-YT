///////////////*****= Get Methods =*****/////////////////
//===== innerText


// var element;

// element = document.getElementById("banner_content").innerText;
// console.log(element);

//////////////////////////////////////////////////

//===== innerHTML


//  var element;

//  element = document.getElementById("header").innerHTML;
//  console.log(element);

//////////////////////////////////////////////////

//===== getAttribute


// var element;

// element = document.getElementById("banner_content").getAttribute("class"); //use id , style , onclickFun
// console.log(element);

//////////////////////////////////////////////////

//===== getAttributeNode


// var element;

// element = document.getElementById("banner_content").getAttributeNode("onClick").value; //use id , style , onclickFun
// console.log(element);

//////////////////////////////////////////////////

//===== Attribute


// var element;

// element = document.getElementById("banner_content").attribute["2"].value;
// console.log(element);

//////////////////////////////////////////////////


///////////////*****= Set Methods =*****/////////////////


//===== innerHTML & innerText


//  var element;

// document.getElementById("header").innerHTML = "<h1>New Heading</h1>";
// console.log(element);

// element = document.getElementById("header").innerHTML;
// console.log(element);


//  element = document.getElementById("header").innerHTML;
//  console.log(element);

//////////////////////////////////////////////////

//===== setAttribute


//  var element;

// document.getElementById("header").innerHTML = "<h1>New Heading</h1>";

// element = document.getElementById("header").setAttribute("class" , "headerClass");  // use = "style,'border:10px dotted yellow"

// element = document.getElementById("header").getAttribute("class");

//  console.log(element);

//////////////////////////////////////////////////

//===== Attribute


// var element;

// document.getElementById("header").innerHTML = "<h1>New Heading</h1>";

// element = document.getElementById("header").Attribute[1].value = "xyz";  // use = add class xyz..........

// element = document.getElementById("header").getAttribute("class");

// console.log(element);

//////////////////////////////////////////////////

var element;

document.getElementById("header").innerHTML = "<h1>New Heading</h1>";

element = document.getElementById("header").Attribute[1].value = "xyz";  // use = add class xyz..........

element = document.getElementById("header").removeAttribute('style');

element = document.getElementById("header").getAttribute("class");

console.log(element);

//////////////////////////////////////////////////