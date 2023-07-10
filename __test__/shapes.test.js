const {Triangle,Circle,Square} = require("../lib/shapes.js");

//testing suite for Triangle render function & Shape setColor function
describe('Triangle', ()=>{
    describe('render function within Triangle and setColor function within Shape class', ()=>{
        it('should render the Triangle svg string with the color passed in setColor for fill', ()=>{
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual('<polygon points="150 10, 10 190, 290 190" fill="blue" />');
        })
    })
})

//testing suite for Circle render function & Shape setColor function
describe('Circle', ()=>{
    describe('render function within Circle and setColor function within Shape class', ()=>{
        it('should render the Circle svg string with the color passed in setColor for fill', ()=>{
            const circle = new Circle();
            circle.setColor("#00FFFF"); // testing hex code here
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="90" fill="#00FFFF" />');
        })
    })
})

//testing suite for Square render function & Shape setColor function
describe('Square', ()=>{
    describe('render function within Square and setColor function within Shape class', ()=>{
        it('should render the Square svg string with the color passed in setColor for fill', ()=>{
            const square = new Square();
            square.setColor("yellow");
            expect(square.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="yellow" />');
        })
    })
})