var inform = document.querySelectorAll(".left ul li");
var headerHeight = document.querySelector("header").offsetHeight;
var footerHeight = document.querySelector("footer").offsetHeight;
var right = document.querySelector(".right");

servMenuAdjuster();

for (var i = 0; i < inform.length; i++) {
  if ((i % 2) !== 0) {
    console.log(i / 2);
    console.log(i);
    inform[i].classList.add("grey-bckgr");
  }
}

function servMenuAdjuster() {
  window.addEventListener("scroll", function(evt) {
    var scrolDist = window.pageYOffset;
    console.log(scrolDist);
    if (scrolDist > headerHeight) {
      console.log("hi");
      right.classList.remove("right-bScroll");
      right.classList.add("right-aScroll");
    } else {
      right.classList.remove("right-aScroll");
      right.classList.add("right-bScroll");
    }
  });
}