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
