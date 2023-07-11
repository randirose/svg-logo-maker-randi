// shapes class set up for common property for Tri, Sq, Cir classes to inherit - shape color
class Shape{
    setColor(color){
        this.color=color;
    }
}

// individual shape classes, inherits color from shape class. renders template literal to be used in the logo text in renderSvg() in svg-text.js
// triangle class constructor
class Triangle extends Shape {
    render(){
        return `<polygon points="150 10, 10 190, 290 190" fill="${this.color}" />`
    }
}
// circle class constructor
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`
    }
}
// square class constructor
class Square extends Shape {
    render(){
        return `<rect x="60" y="10" width="180" height="180" fill="${this.color}" />`
    }
}

// export shape class constructors
module.exports = {Triangle,Circle,Square};