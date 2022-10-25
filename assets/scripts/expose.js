// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let horn_select = document.getElementById("horn-select");
  horn_select.addEventListener('change', handleHornSelect);

  let volume_slider = document.getElementById("volume");
  volume_slider.addEventListener('change', handleVolumeSlider);

  let play_button = document.querySelector("button");
  play_button.addEventListener('click', handlePlayButton);
}

function handleHornSelect () {
  let horn_select = document.getElementById("horn-select");
  let index = horn_select.selectedIndex;
  let files = ["air-horn", "car-horn", "party-horn"];

  let image = document.querySelector("#expose img");
  let prefix = "assets/images/";
  let suffix = ".svg"
  image.src = prefix + files[index - 1] + suffix;

  let audio = document.querySelector("audio");
  prefix = "assets/audio/";
  suffix = ".mp3";
  audio.src = prefix + files[index - 1] + suffix;
}

function handleVolumeSlider () {
  let volume_slider = document.getElementById("volume");
  let volume = volume_slider.value;
  let image = document.querySelector("#volume-controls img");

  let files = ["volume-level-0", "volume-level-1", "volume-level-2", "volume-level-3"];
  let prefix = "assets/icons/";
  let suffix = ".svg"

  if (volume < 1) {image.src = prefix + files[0] + suffix;}
  else if (volume < 33) {image.src = prefix + files[1] + suffix;}
  else if (volume < 67) {image.src = prefix + files[2] + suffix;}
  else {image.src = prefix + files[3] + suffix;}

  let audio = document.querySelector("audio");
  audio.volume = volume / 100;
}

function handlePlayButton () {
  let horn_select = document.getElementById("horn-select");
  let audio = document.querySelector("audio");
  audio.play();
  let index = horn_select.selectedIndex;
  if (index === 3) {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }
}