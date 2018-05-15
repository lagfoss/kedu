/*community post*/
function getLocal() {
  var note = localStorage.getItem('commPost');

  if(note != null) {
      return JSON.parse(note);
  }
  else {
    return [];
  }
}

function setLocal(origNote) {
  var newNote = JSON.stringify(origNote);
  localStorage.setItem('commPost', newNote);
}

function submitNote(inputText) {
  var origNote = getLocal();
  var newNotee = {
    text:       inputText,
  };
  origNote.push(newNotee);

  setLocal(origNote);
}

function buildList() {
  var note = getLocal();

  var ulElm = document.querySelector('ul');
  ulElm.innerHTML = '';

  for(var i = 0; i < note.length; i++) {
    var liElm = document.createElement('li');
    var pElm = document.createElement('p');

    pElm.innerHTML = note[i].text;

    liElm.appendChild(pElm);
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
