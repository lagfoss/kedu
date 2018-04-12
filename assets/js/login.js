//Email and password from signup

var email = document.getElementById('email');
var password = document.getElementById('password');

//storing input from signup

function store() {
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);
}

//check if stored data from signup is equal to entered data in the login

function check() {
  //stored data from the signup
  var storedEmail = localStorage.getItem('email');
  var storedPassword = localStorage.getElementById('password');

  //entered data from loginbutton
  var userEmail = document.getElementById('userEmail');
  var userPassword = document.getElementById('userPassword');

  //check if stored data from signup is equal to data from loginbutton
  if(userEmail.value == storedEmail && userPassword.value == storedPassword) {
    alert('Welcome to KEDU');
  }else {
    alert('Incorrect email or password');
  }
}
