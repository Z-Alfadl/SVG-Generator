class Shape {
    constructor(fill, stroke) {
        this.fill = fill;
    }
    render() {
        throw new Error(`this shouldn't be here.`)
    }
}

class Square extends Shape {
    constructor(fill){
        super(fill)
    }
    render() {
        return `
        <rect x="0" y="0" width="300" height="200" fill="${this.fill}"/>`
    }
};

class Triangle extends Shape {
    constructor(fill){
        super(fill)
    }
    render() {
        return `
        <polygon fill="${this.fill}" points="150, 18 244, 182 56,182" />`
    }
}

class Circle extends Shape {
    constructor(fill) {
        super(fill)
        
    }
    render() {
        return `
        <circle fill="${this.fill}" cx="150" cy="100" r="80"/>`
    }
}

module.exports = {Square, Triangle, Circle}