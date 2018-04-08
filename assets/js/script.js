//console.log("YAY!"); for debugging use
function getInfo() {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  console.log("")
}

document.getElementById("loginButton").onclick = function () {
  location.href = "dashb.html";
}

document.getElementById("signup").onclick = function () {
  location.href = "regt.html";
}

/*if.getElementById("newsite").innerHTML=""
document.getElementById("successbox").style.display = "block";
if(email ==""){
 document.getElementById("email").style.border ="2px solid red";
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
  var notes = localStorage.getItem('noteList');

  if(notes != null) {
      return JSON.parse(notes);
  }
  else {
    return [];
  }
}

function setLocal(origNotes) {
  var newNotes = JSON.stringify(origNotes);
  localStorage.setItem('noteList', newNotes);
}

function submitNote(inputText, inputDate, inputImportant, inputIcon) {
  var origNotes = getLocal();
  var newNote = {
    text:       inputText,
    date:       inputDate,
    important:  inputImportant,
    icon:       inputIcon
  };
  origNotes.push(newNote);

  setLocal(origNotes);
}

//setLocal('Cry', '2018-04-03 11:11:11', true, 'empire');

function buildList() {
  var notes = getLocal();

  var ulElm = document.querySelector('ul');
  ulElm.innerHTML = '';

  for(var i = 0; i < notes.length; i++) {
    var liElm = document.createElement('li');
    var pElm = document.createElement('p');
    var delBtn = document.createElement('button');
    var btnText = document.createTextNode('Edit');

    if(notes[i].important === true) {
      liElm.style.backgroundColor = 'deeppink';
      liElm.style.color = 'white';
    }

    pElm.innerHTML = notes[i].text;
    pElm.classList.add('pinkUnicorn');
    pElm.setAttribute('data-index', i);

    pElm.addEventListener('click', function(event) {
      var index = event.target.getAttribute('data-index')
      var notes = getLocal();
      console.log(notes[index]);
      notes[index].text = "Changed";
      var inputTemp = document.querySelector('#noteText');
      inputTemp.value = 'whatever';
      setLocal(notes);
      buildList();
    });

    liElm.appendChild(pElm);
    liElm.appendChild(delBtn);
    delBtn.appendChild(btnText);

    ulElm.appendChild(liElm);
  }
}

window.onload = function() {
  buildList();
}

var submitBtn = document.querySelector('#addNote');

submitBtn.addEventListener('click', function() {
  var text = document.querySelector('#noteText');

  submitNote(text.value, 'empire');
  buildList();

  text.value = '';
})
