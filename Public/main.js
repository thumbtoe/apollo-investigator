var inform = document.querySelectorAll(".left ul li");
var headerHeight = document.querySelector("header").offsetHeight;
var footerHeight = document.querySelector("footer").offsetHeight;
var right = document.querySelector(".right");
var contain = document.querySelector(".contain");
var burgerMenu = document.querySelector(".menu-burger");
var burgerMenuList = document.querySelectorAll("#nav-mobile ul li");

servMenuAdjuster();
burgerMenuDropdown();

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
      contain.style.position = "fixed";
    } else {
      contain.style.position = "absolute";
    }
  });
}

function burgerMenuDropdown() {
  burgerMenu.addEventListener("click", function() {

    for (var i = 0; i < burgerMenuList.length; i++) {
      if (burgerMenuList[i].style.display == "none") {
        burgerMenuList[i].style.display = "block";
      } else {
        burgerMenuList[i].style.display == "none"
      }
    }
  });
}