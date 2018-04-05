//console.log("YAY!"); for debugging use
/*function getInfo() {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  console.log("")
}

document.getElementById.("loginButton").onclick = function () {
  location.href = "dashb.html";
}*/

/*if.getElementById("newsite").innerHTML=""
document.getElementById("successbox").style.display = "block";
if(email ==""){
 document.getElementById("email").style.border ="2px solid red";
}*/

/*Manuals*/

function myFunction(a) {
  a.parentNode.getElementsByClassName("dropmanu-content")[0].classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.manu')) {

    var dropdowns = document.getElementsByClassName("dropmanu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
