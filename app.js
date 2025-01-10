#!/usr/bin/env node

const { program } = require("commander");
const { createSound } = require("./controllers/createSound");

program
  .command("say")
  .option("-t, --text <text>", "text") 
  .option("-s, --speed <speed>", "speed", 1) 
  .action((options) => {
    if (options.text && options.speed) {
        createSound(options.text, 'en', options.speed)
    } else {
      console.log("Please provide both text and speed.");
    }
  });

program.parse(process.argv);
