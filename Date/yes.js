function myFunction() {
    var txt;
    if (confirm("“I fell in love with you and I never said anything, i love you 😘😘”")) {
      txt = "You pressed Yes!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }

  //onclick="myFunction()"