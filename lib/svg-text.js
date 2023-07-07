    //import files/libraries
    const {Triangle,Circle,Square} = require('./shapes.js');
    const questions = require('./questions.js');
    
    //code for what to write to the svg logo file
    function renderSvg(answers){
    let shapeSVG;
    //calls render function from the class constructors, depending on user shape choice
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
    return svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeSVG}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.logoText}</text>
  
    </svg>`
}

module.exports = renderSvg;