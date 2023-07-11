// import files/libraries
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle,Circle,Square} = require('./lib/shapes.js');
const questions = require('./lib/questions.js');
const renderSvg = require('./lib/svg-text.js');

// this function uses the renderSvg() function imported to generate the text for the logo.svg file, which is then used as the content parameter in the fs.writeFile method
// it uses fs to write a new file called 'logo.svg' (defined when writeToFile() is called in init())
// error syntax says to console log "Generated logo.svg" if no errors occur
function writeToFile(fileName, answers){
    let logoSvgText = renderSvg(answers);
    fs.writeFile(fileName, logoSvgText, err =>{
        err ? console.error(err) : console.log("Generated logo.svg");
    })
}

// this function initializes app and begins asking user questions; calls writeToFile() function
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        // error handling for if user submits more than 3 chars for logo text, console logs msg and restarts init()
        if (answers.logoText.length > 3){
            console.log("Logo text must be 3 characters or less in length, please start over:");
            init();
        // if user (or once user does, if they needed to restart) submits 3 or fewer characters for logo text, will console log the generated answers object, and call writeToFile()
        } else {
        console.log(answers);
        writeToFile("logo.svg", answers);
        }
    })
}

// Function call to initialize app
init();
