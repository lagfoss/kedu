
  function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "synes godt om " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  function clickCounter2() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) - 1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Synes godt om " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
