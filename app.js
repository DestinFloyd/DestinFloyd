function scrollDown(){
  window.scrollBy(0, 300);
}
function closeInfo(){
  document.getElementById("contactHideaway").style.visibility = "hidden"
  document.getElementById("linkedinLink").style.visibility = "hidden"
}

function openInfo(){
  document.getElementById("contactHideaway").style.color = "visible"
  document.getElementById("linkedinLink").style.color = "visible"
}

function closeAbout(){
  document.getElementById("aboutHideaway").style.color = "hidden"
}

function openAbout(){
  document.getElementById("aboutHideaway").style.color = "visible"
}

