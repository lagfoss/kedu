(function() {
  const posts = document.getElementsByClassName('arrows');
  for (var i = 0; i < posts.length; i += 1) {
    var counter = localStorage.getItem("dataCounter" + i);
    posts[i].setAttribute("data-counter", counter || 0);
    posts[i].setAttribute("data-id", i);
    posts[i].getElementsByClassName("result")[0].innerHTML = counter || 0;
    posts[i].getElementsByClassName("arrowbtnup")[0].addEventListener("click", clickCounterIncrement);
    posts[i].getElementsByClassName("arrowbtndown")[0].addEventListener("click", clickCounterDecrement);
  }
})();


function clickCounterIncrement(event) {
  const element = event.currentTarget.parentElement;
  const counter = parseInt(element.getAttribute("data-counter")) + 1;
  element.setAttribute("data-counter", counter);
  element.getElementsByClassName("result")[0].innerHTML = counter;
  localStorage.setItem("dataCounter" + element.getAttribute("data-id"), counter);
}


function clickCounterDecrement(event) {
  const element = event.currentTarget.parentElement;
  const counter = parseInt(element.getAttribute("data-counter")) - 1;
  element.setAttribute("data-counter", counter);
  element.getElementsByClassName("result")[0].innerHTML = counter;
  localStorage.setItem("dataCounter" + element.getAttribute("data-id"), counter);
}
