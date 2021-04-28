let links = document.getElementById("nav-links");
let navbar = document.getElementById("navbar");
let name  = document.getElementById("name");
let bar1 = document.getElementById("bar1")


function toggleMenu() {
  links.classList.toggle('show');
  bar1.classList.toggle('open');
  bar2.classList.toggle('open');
  bar3.classList.toggle('open');
}

navbar.onclick = toggleMenu;

navbar.click();

function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}
