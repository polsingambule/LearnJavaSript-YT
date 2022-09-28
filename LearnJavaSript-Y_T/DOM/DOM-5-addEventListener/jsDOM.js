
///////////////*****= 1st =*****/////////////////

// var element;

// document.getElementById("header").addEventListener("mouseenter", abc);
// document.getElementById("header").addEventListener("click", function(){

//     document.getElementById("header").style.border = "5px solid pink";

// });

// function abc(){
//     document.getElementById("header").style.background = "green";
// }


///////////////////

// var element;

// document.getElementById("header").addEventListener("click", abc);
// document.getElementById("header").addEventListener("click", function(){

//     document.getElementById("header").style.border = "5px solid pink";

// });

// function abc(){
//     document.getElementById("header").style.background = "green";
// }

////////////////////SortCut

// var element;

// document.getElementById("header").addEventListener("click", abc);
// document.getElementById("header").addEventListener("click", function(){

//     this.style.border = "5px solid pink";

// });

// function abc(){
//     document.getElementById("header").style.background = "green";
// }

//////////////////////

// document.querySelector("#inner").addEventListener('click',function(){
//         alert('inner Div');
// },false);

// document.querySelector("#inner").addEventListener('click',function(){
//     alert('outer Div');
// },false);


//////////////////////////==removeEventListener()

var element;

document.getElementById("header").addEventListener("mouseleave", abc);

document.getElementById("header").addEventListener('click',xyz);

function abc(){
    document.getElementById("header").style.background = "green";
}
function xyz(){
    document.getElementById("header").removeEventListener('mouseleave',abc);
}



///////////////*****= 2st =*****/////////////////

// var element;

// document.getElementById("header").onclick = abc;

// function abc(){
//     document.getElementById("header").style.background = "green";
    
// }



////////////////////////////////////////////////