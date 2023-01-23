function burgerNav(event) {
  (document.querySelector('nav')).style.display = 'block';
  var burger = document.querySelector("#burger");
  burger.style.transform = "translateX(200px)";
  burger.style.opacity = 0;
  var croix = document.querySelector("#croix");
  croix.style.display = "inline-block";
  croix.style.transform = "translateX(120px)";
  croix.style.opacity = 1;
  console.log(burger);
}

var burger = document.querySelector("#burger");
// add event on animation end
burger.addEventListener("transitionend", burgerEnd, false);
var croix = document.querySelector("#croix");
function burgerEnd(event) {
  // if (croix.style.opacity==0){
  //     croix.style.opacity=1;
  //     burger.style.opacity=0;
  // }

}

// croix.addEventListener("transitionend", croixEnd, false);

// function croixEnd(event){
//     if(burger.style.visibility=="visible"){
//     burger.style.visibility="hidden";}
// }

function croixNav(event) {
  (document.querySelector('nav')).style.display = 'none';
  var burger = document.querySelector("#burger");
  burger.style.transform = "translateX(0px)";
  burger.style.opacity = 1;
  burger.style.visibility = "visible";
  var croix = document.querySelector("#croix");
  croix.style.transform = "translateX(0px)";
  croix.style.opacity = 0;
  console.log(burger);
}
