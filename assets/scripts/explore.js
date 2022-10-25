// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const play_button = document.querySelector("button");
const input_field = document.querySelector("textarea");
const voice_select = document.getElementById('voice-select'); 
const face_image = document.querySelector("#explore img");
let voices = null;

function init() {
  synth.onvoiceschanged = populateVoiceList; // waits for all voices to be ready before populating

  play_button.addEventListener('click', handlePlayButton)
}

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    let option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voice_select.appendChild(option);
  }
}

function handlePlayButton () {
  let utterance = new SpeechSynthesisUtterance(input_field.value);
  let index = voice_select.selectedIndex;
  utterance.voice = voices[index - 1];
  synth.speak(utterance);
  utterance.onstart = function(){
    face_image.src = "assets/images/smiling-open.png";
  }
  utterance.onend = function () {
    face_image.src = "assets/images/smiling.png"
  };
}