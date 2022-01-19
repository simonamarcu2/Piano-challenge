// const sound = document.getElementById("sound");
const button = document.getElementById("key");

document.addEventListener("keypress", (event) => {
  if (event.key == "a") {
    const keySound = document.getElementById("audioA");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "s") {
    const keySound = document.getElementById("audioS");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "d") {
    const keySound = document.getElementById("audioD");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "f") {
    const keySound = document.getElementById("audioF");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "g") {
    const keySound = document.getElementById("audioG");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "h") {
    const keySound = document.getElementById("audioH");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "j") {
    const keySound = document.getElementById("audioJ");
    keySound.volume = 0.3;
    keySound.play();
  }
});


// button.getElementById("key").addEventListener("click", music);
// function music()
