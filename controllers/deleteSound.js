"use strict";

const fs = require("fs");

exports.deleteSound = (path) => {
  setTimeout(() => {
    try {
      fs.unlinkSync(path);
      console.log("File deleted successfully");
    } catch (err) {
      console.error("Error deleting the file:", err);
    }
  },5000);
};
