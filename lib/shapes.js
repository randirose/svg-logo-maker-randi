// shapes class set up for common properties, for Tri, Sq, Cir classes to inherit
class Shape{
    setColor(color){
        this.color=color;
    }
}

// triangle class, inherits color from shape class. renders template literal to be used in the logo text on index.js
class Triangle extends Shape {
    render(){
        return `<polygon points="150 10, 10 190, 290 190" fill="${this.color}" />`
    }
}
// circle class, inherits color from shape class
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`
    }
}
// square class, inherits color from shape class
class Square extends Shape {
    render(){
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`
    }
}

// export shapes file to index.js
module.exports = {Triangle,Circle,Square};