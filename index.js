// import files/libraries
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle,Circle,Square} = require('./lib/shapes.js');

// questions array for inquirer to prompt user with
const questions = [
    // logo text
    {
        type: "input",
        name: "logoText",
        message: "Please enter the text you would like your logo to display (up to 3 characters)"
    },
    // text color
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color for your text (keyword OR hexadecimal number)"
    },
    // shape type
    {
        type: "list",
        name: "shapeType",
        message: "Please choose one of the shapes below for your logo",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    // shape color
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color for the shape (keyword OR hexadecimal number)"
    }
]

function writeToFile(fileName, answers){
    //code for what to write to the svg logo file
    let shapeSVG;
    if (answers.shapeType === "Triangle"){
        const triangle = new Triangle();
        shapeColor = triangle.setColor(answers.shapeColor);
        shapeSVG = triangle.render();
    } else if (answers.shapeType === "Circle"){
        const circle = new Circle();
        shapeColor = circle.setColor(answers.shapeColor);
        shapeSVG = circle.render();
    } else {
        const square = new Square();
        shapeColor = square.setColot(answers.shapeColor);
        shapeSVG = square.render();
    }
    let logoText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeSVG}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.logoText}</text>
  
    </svg>`
    fs.writeFile(fileName, logoText, err =>{
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
