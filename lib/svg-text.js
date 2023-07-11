    //import files/libraries
    const {Triangle,Circle,Square} = require('./shapes.js');
    const questions = require('./questions.js');
    
    // function renders what to write to the logo.svg file
    function renderSvg(answers){
    let shapeSVG;
    // calls setColor() and render() functions from the class constructors, depending on user shape choice
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
        shapeColor = square.setColor(answers.shapeColor);
        shapeSVG = square.render();
    }
    // returns template literal for logo.svg file, pulls in shapeSVG value generated in the above logic, as well as the user choices for text and text color
    return svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeSVG}
  
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.logoText}</text>
  
    </svg>`
}

// export renderSvg() function
module.exports = renderSvg;