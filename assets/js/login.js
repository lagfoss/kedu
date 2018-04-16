function store() {
  //First name, email and password from signup
  var name = document.getElementById('fName')
  var email = document.getElementById('mail');
  var password = document.getElementById('pw');
  //storing input from signup
  localStorage.setItem('mail', email.value);
  localStorage.setItem('pw', password.value);
  localStorage.setItem('fName', name.value);
}
  document.getElementById("fnUser").innerHTML = localStorage.getItem("fName");

//check if stored data from signup is equal to entered data in the login

function check() {
  //stored data from the signup
  var storedEmail = localStorage.getItem('mail');
  var storedPassword = localStorage.getItem('pw');
  var storedName = localStorage.getItem('fName');

  //entered data from login
  var userEmail = document.getElementById('userEmail');
  var userPassword = document.getElementById('userPassword');

  //check if stored data from signup is equal to data from loginbutton
  if(userEmail.value == storedEmail && userPassword.value == storedPassword) {
    window.location = window.location.href.replace("index.html","dashb.html");
    alert('Welcome to KEDU');
  }else {
    alert('Incorrect email or password');
  }
}
