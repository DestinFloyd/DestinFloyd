// did a console log to check connection
// console.log("working");

// making a function to spin the dive around then change the page
var project = document.getElementById("projects");

function moveAround1(){
var x = 0;
var project = document.getElementById("projects");


for(let i = 0; i <= 75; i++){
    x ++;
    project.style.marginLeft =  x + "%";

}


}