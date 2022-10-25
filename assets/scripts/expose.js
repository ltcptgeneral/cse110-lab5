// expose.js

window.addEventListener('DOMContentLoaded', init);

const horn_select = document.getElementById("horn-select");
const volume_slider = document.getElementById("volume");
const play_button = document.querySelector("button");

const horn_files = ["air-horn", "car-horn", "party-horn"];
const volume_files = ["volume-level-0", "volume-level-1", "volume-level-2", "volume-level-3"];

function init() {
  
  horn_select.addEventListener('change', handleHornSelect);
 
  volume_slider.addEventListener('change', handleVolumeSlider);

  play_button.addEventListener('click', handlePlayButton);
}

function handleHornSelect () {
  let index = horn_select.selectedIndex;
  
  let image = document.querySelector("#expose img");
  let prefix = "assets/images/";
  let suffix = ".svg"
  image.src = prefix + horn_files[index - 1] + suffix;

  let audio = document.querySelector("audio");
  prefix = "assets/audio/";
  suffix = ".mp3";
  audio.src = prefix + horn_files[index - 1] + suffix;
}

function handleVolumeSlider () {
  let volume = volume_slider.value;
  let image = document.querySelector("#volume-controls img");
  
  let prefix = "assets/icons/";
  let suffix = ".svg"

  if (volume < 1) {image.src = prefix + volume_files[0] + suffix;}
  else if (volume < 33) {image.src = prefix + volume_files[1] + suffix;}
  else if (volume < 67) {image.src = prefix + volume_files[2] + suffix;}
  else {image.src = prefix + volume_files[3] + suffix;}

  let audio = document.querySelector("audio");
  audio.volume = volume / 100;
}

function handlePlayButton () {
  let audio = document.querySelector("audio");
  audio.play();
  let index = horn_select.selectedIndex;
  if (index === 3) {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }
}