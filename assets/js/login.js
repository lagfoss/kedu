function store() {
  //Email and password from signup
  var email = document.getElementById('mail');
  var password = document.getElementById('pw');
  //storing input from signup
  localStorage.setItem('mail', email.value);
  localStorage.setItem('pw', password.value);
}

//check if stored data from signup is equal to entered data in the login

function check() {
  //stored data from the signup
  var storedEmail = localStorage.getItem('mail');
  var storedPassword = localStorage.getElementById('pw');

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
