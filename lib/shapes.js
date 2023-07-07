// shapes class set up for common properties, for Tri, Sq, Cir classes to inherit
class Shape{
    constructor(color){
        this.color=color;
    }
    setColor(color){
        this.color=color;
    }
}

// triangle class, inherits color from shape class. renders template literal to be used in the logo text on index.js
class Triangle extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}" />`
    }
}
// circle class, inherits color from shape class
class Circle extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
// square class, inherits color from shape class
class Square extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return `<rect x="150" y="150" width="150" height="150" fill="${this.color}" />`
    }
}

// export shapes file to index.js
module.exports = {Triangle,Circle,Square};