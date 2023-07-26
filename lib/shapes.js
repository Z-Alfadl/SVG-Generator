class Shape {
    constructor(fill) {
        this.fill = fill;
    }
    render() {
        throw new Error(`this shouldn't be here.`)
    }
    setColor(color) {
        this.fill = color
    }
}

class Square extends Shape {
    constructor(fill){
        super(fill)
    }
    render() {
        return `<rect x="0" y="0" width="300" height="200" fill="${this.fill}"/>`
    }
    
};

class Triangle extends Shape {
    constructor(fill){
        super(fill)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56,182" fill="${this.fill}"/>`
    }
}

class Circle extends Shape {
    constructor(fill) {
        super(fill)
        
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}"/>`
    }
}

module.exports = {Shape, Square, Triangle, Circle}