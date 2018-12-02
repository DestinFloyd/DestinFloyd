// did a console log to check connection
// console.log("working");

// making a function to spin the dive around then change the page
//  must change the position to realtive and z-inde to 3 when theyre animated so theyre on TOPPPPPP; (2 items have z -index 2 in project so why its 3 needed)


function moveAround1(){


var project = document.getElementById("projects");



    var xRight = 25;
    var xLeft = 0;
    var yUp = 0;
    var yDown = 0;

project.style.zIndex = 4;


for(let i = 0; i <= 10; i++){
    xRight ++;
    yDown ++;
    project.style.marginLeft =  xRight + "%";
    project.style.marginTop =  yDown + "%";
    project.style.marginRight = xLeft + "%";
    project.style.marginBottom =  yUp + "%";
}






}
// else{
//     clearInterval(all);
// }