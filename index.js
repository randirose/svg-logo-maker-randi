// import files/libraries
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes.js');

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