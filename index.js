let drums = document.querySelectorAll(".drum");
for (let i = 0; i < drums.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  let button = event.key;
  makeSound(button);
  addAnimation(button);
});
function makeSound(action) {
  switch (action) {
    case "w":
      let audiow = new Audio("./sounds/tom-1.mp3");
      audiow.play();
      break;
    case "a":
      let audioa = new Audio("./sounds/tom-2.mp3");
      audioa.play();
      break;
    case "s":
      let audios = new Audio("./sounds/tom-3.mp3");
      audios.play();
      break;
    case "d":
      let audiod = new Audio("./sounds/tom-4.mp3");
      audiod.play();
      break;
    case "j":
      let audioj = new Audio("./sounds/snare.mp3");
      audioj.play();
      break;
    case "k":
      let audiok = new Audio("./sounds/crash.mp3");
      audiok.play();
      break;
    case "l":
      let audiol = new Audio("./sounds/kick-bass.mp3");
      audiol.play();
      break;
  }
}
function addAnimation(key) {
  let currentKey = document.querySelector("." + key);
  currentKey.classList.add("pressed");
  setTimeout(() => {
    currentKey.classList.remove("pressed");
  }, 100);
}
