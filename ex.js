const sound = document.getElementById(".sound");
const button = document.getElementsByClassName(".key");

document.addEventListener("keypress", (event) => {
  if (event.key == "a") {
    const keySound = document.getElementById("audio1");
    keySound.volume = 0.1;
    keySound.play();
  }
});

document.addEventListener("click", (event) => {
  if (event.key == "a") {
    const keySound = document.getElementById("audio");
    keySound.volume = 0.1;
    keySound.play();
  }
})

function playSound(soundfile) {
  document.getElementsByClassName("key").innerHTML="<embed src=\""+soundfile+"\"hidden=\"true\"autostart=\"true\" loop=\"false\"/>;
}
