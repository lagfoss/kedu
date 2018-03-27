// console.log("YAY!"); for debugging use
function getInfo() {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  console.log("")

}


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
