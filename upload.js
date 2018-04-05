//alert ("I am here");

function getName(){
  var fName = document.getElementById("fName").value;
  var fEmail = document.getElementById("fEmail").value;
  var fMessage = document.getElementById("fMessage").value;

  alert ("Name: " + fName);
  document.getElementById("successbox").style.display ="block";

if (fName ==""){
  document.getElementById("fName").style.border ="1px solid red";
}

  document.getElementById("successbox").innerHTML = "My name is: " + fName + " and my mail is " + fEmail + "<br>" + fMessage;
//  console.log("YAY");
}
