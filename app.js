

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
    // project.style.marginLeft =  xRight + "%";
    // project.style.marginTop =  yDown + "%";
    // project.style.marginRight = xLeft + "%";
    // project.style.marginBottom =  yUp + "%";


project.style.zIndex = 4;
var a = 0;
var b = 0;


if (a < 25){
    a ++;
    xRight ++;
    yDown ++;
    project.style.marginLeft =  xRight + "%";
    project.style.marginTop =  yDown + "%";
    }

else if (b < 20){
    b++;
    xRight += 2;
    yDown +=2;
    project.style.marginLeft =  xRight + "%";
    project.style.marginTop =  yDown + "%";




}

}







// else{
//     clearInterval(all);
// }