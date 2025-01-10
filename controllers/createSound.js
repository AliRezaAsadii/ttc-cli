"use strict";

const googleTTS = require("google-tts-api");
const { downloadAudio } = require("./downloadSound");
const { playSound } = require("./playSound");

exports.createSound = (text, lang, speed) => {
  try {
    const url = googleTTS.getAudioUrl(text, { lang, slow: speed < 1 });
    console.log("Audio file URL:", url);

    downloadAudio(url, "output.mp3")
      .then((filePath) => {
        playSound(filePath);
      })
      .catch((err) => {
        console.error("Error occurred while downloading the file:", err);
      });
  } catch (err) {
    console.error("An error occurred:", err);
  }
};
