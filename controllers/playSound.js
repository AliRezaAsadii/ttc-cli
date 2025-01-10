"use strict";

const { exec } = require("child_process");
const { deleteSound } = require("./deleteSound");

exports.playSound = async (path) => {
  await exec(`mpg123 ${path}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error occurred while playing the file: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Player error: ${stderr}`);
      return;
    }

    console.log(`File played successfully: ${stdout}`);
  });

  await deleteSound(path);
};
