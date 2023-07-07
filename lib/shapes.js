// shapes class set up for common properties, for Tri, Sq, Cir classes to inherit
class Shape{
    setColor(color){
        this.color=color;
    }
}

// triangle class, inherits color from shape class
class Triangle extends Shape {
    render(){
        return //triangle svg code w color input
    }
}
// circle class, inherits color from shape class
class Circle extends Shape {
    render(){
        return //circle svg code w color input
    }
}
// square class, inherits color from shape class
class Square extends Shape {
    render(){
        return //square svg code w color input
    }
}

// export shapes file to index.js
module.exports = Shape;