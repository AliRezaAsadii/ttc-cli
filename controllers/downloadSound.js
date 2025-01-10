"use strict";

const fs = require("fs");
const https = require("https");

exports.downloadAudio = async (url, filePath) => {
  return await new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          console.log("Audio file created: output.mp3");
          resolve(filePath);
        });
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
  });
};
