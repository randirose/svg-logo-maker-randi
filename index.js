// import files/libraries
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle,Circle,Square} = require('./lib/shapes.js');
const questions = require('./lib/questions.js');
const renderSvg = require('./lib/svg-text.js');

// this function uses the renderSVG
function writeToFile(fileName, answers){
    let logoSvgText = renderSvg(answers);
    fs.writeFile(fileName, logoSvgText, err =>{
        err ? console.error(err) : console.log("Generated logo.svg");
    })
}

// this function initializes app and begins asking user questions; calls writeToFile function
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers);
        writeToFile("logo.svg", answers);
    })
}

// Function call to initialize app
init();
