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

//Gallery

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*community post*/
function getLocal() {
  var note = localStorage.getItem('commPost');

  if(note != null) {
      return JSON.parse(notes);
  }
  else {
    return [];
  }
}

function setLocal(origNote) {
  var newNote = JSON.stringify(origNote);
  localStorage.setItem('commPost', newNote);
}

function submitNote(inputText, inputIcon) {
  var origNote = getLocal();
  var newNotee = {
    text:       inputText,
    icon:       inputIcon
  };
  origNote.push(newNotee);

  setLocal(origNote);
}

//setLocal('Cry', '2018-04-03 11:11:11', true, 'empire');

function buildList() {
  var note = getLocal();

  var ulElm = document.querySelector('ul');
  ulElm.innerHTML = '';

  for(var i = 0; i < notes.length; i++) {
    var liElm = document.createElement('li');
    var pElm = document.createElement('p');

    pElm.innerHTML = note[i].text;
    pElm.classList.add('pinkUnicorn');
    pElm.setAttribute('data-index', i);

    pElm.addEventListener('click', function(event) {
      var index = event.target.getAttribute('data-index')
      var note = getLocal();
      console.log(note[index]);
      note[index].text = "Changed";
      var inputTemp = document.querySelector('#comment');
      inputTemp.value = 'whatever';
      setLocal(note);
      buildList();
    });

    liElm.appendChild(pElm);
    delBtn.appendChild(btnText);

    ulElm.appendChild(liElm);
  }
}

window.onload = function() {
  buildList();
}

var submitBtn = document.querySelector('#addComment');

submitBtn.addEventListener('click', function() {
  var text = document.querySelector('#comment');

  submitNote(text.value);
  buildList();

  text.value = '';
})
