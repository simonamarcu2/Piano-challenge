const sound = document.getElementById(".sound");
const button = document.getElementsByClassName(".key");

document.addEventListener("keypress", (event) => {
  if (event.key == "a") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "a") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "s") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "d") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "f") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "g") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "h") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.3;
    keySound.play();
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "j") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.3;
    keySound.play();
  }
});

document.addEventListener("click", (event) => {
  if (event.key == "a") {
    const keySound = document.getElementsByClassName("key");
    keySound.volume = 0.3;
    keySound.play();
  }
})

// function playSound(soundfile) {
//   document.getElementsByClassName("key").innerHTML="<embed src=\""+soundfile+"\"hidden=\"true\"autostart=\"true\" loop=\"false\"/>;
// }
