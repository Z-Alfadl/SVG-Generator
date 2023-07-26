const { Shape, Square, Triangle, Circle } = require('../shapes');
//Tests for Shape class
describe('Shape', () => {
    //Ensures 
    describe('constructor', () => {
        it('should take a fill value and set fill key to that value', () => {
            let shape = new Shape('green')
            expect(shape.fill).toEqual("green")
        })
    })
    describe('method', () => {
        it('should throw an error when running the render method', () => {
            let shape = new Shape('white');
            expect(shape.render).toThrow(Error)
        })
    })
})

describe('Square', () => {
    describe('constructor', () => {
        it('should take a fill value and set fill key to that value', () => {
            let shape = new Square('green')
            expect(shape.fill).toEqual("green")
        })
    })
    describe('render', () => {
        it('should return an svg element with matching color', () => {
            let squareRender = new Square('green').render();
            let result = `<rect x="0" y="0" width="300" height="200" fill="green"/>`
            expect(squareRender).toEqual(result)
        })
    })
})

describe('Triangle', () => {
    describe('constructor', () => {
        it('should take a fill value and set fill key to that value', () => {
            let shape = new Triangle('green')
            expect(shape.fill).toEqual("green")
        })
    })
    describe('render', () => {
        it('should return an svg element with matching color', () => {
            let triangleRender = new Triangle('green').render()
            let result = `<polygon points="150, 18 244, 182 56,182" fill="green"/>`
            expect(triangleRender).toEqual(result)
        })
    })
    describe('setColor', () => {
        it('should set the fill value of triangle to a new color', () => {
            let triangle = new Triangle("white");
            triangle.setColor("blue")
            let result = `<polygon points="150, 18 244, 182 56,182" fill="blue"/>`
            expect(triangle.render()).toEqual(result)
        })
    })
})
describe('Circle', () => {
    describe('constructor', () => {
        it('should take a fill value and set fill key to that value', () => {
            let shape = new Circle('green')
            expect(shape.fill).toEqual("green")
        })
    })
    describe('render', () => {
        it('should return an svg element with matching color', () => {
            let circleRender = new Circle('green').render()
            let result = `<circle cx="150" cy="100" r="80" fill="green"/>`
            expect(circleRender).toEqual(result)
        })
    })
})