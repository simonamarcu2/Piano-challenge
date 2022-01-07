const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");
const sound3 = document.getElementById("sound3");
const sound4 = document.getElementById("sound4");
const buttonA = document.getElementsByClassName("key1");
const buttonS = document.getElementsByClassName("key2");
const buttonD = document.getElementsByClassName("key3");
const buttonF = document.getElementsByClassName("key4");

document.addEventListener("keypress", (event) => {
  if (event.key == "a") {
    const keySound1 = document.getElementById("audio1");
    keySound1.volume = 0.1;
    keySound1.play();
  }
  if (event.key == "s") {
    const keySound2 = document.getElementById("audio2");
    keySound2.volume = 0.1;
    keySound2.play();
  }
  if (event.key == "d") {
    const keySound3 = document.getElementById("audio3");
    keySound3.volume = 0.1;
    keySound3.play();
  }
  if (event.key == "f") {
    const keySound4 = document.getElementById("audio4");
    keySound4.volume = 0.1;
    keySound4.play();
  }
});

button.addEventListener("click", ()
