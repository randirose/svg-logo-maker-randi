const {Triangle,Circle,Square} = require("../lib/shapes.js");

//testing suite for Triangle
describe('Triangle', ()=>{
    describe('render function within Triangle and setColor function within Shape class', ()=>{
        it('should render the triangle svg string with the color passed in setColor for fill', ()=>{
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual('<polygon points="150 10, 60 190, 240 190" fill="blue" />');
        })
    })
})

//testing suite for Circle
describe('Triangle', ()=>{
    describe('render function within Triangle and setColor function within Shape class', ()=>{
        it('should render the triangle svg string with the color passed in setColor for fill', ()=>{
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual('<polygon points="150 10, 60 190, 240 190" fill="blue" />');
        })
    })
})