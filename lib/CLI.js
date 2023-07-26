const inquirer = require('inquirer')
const fs = require("fs");
const {SVGText} = require('./text')
const {Square, Triangle, Circle} = require("./shapes");
const questions = require('./questions')

class CLI {
    constructor() {
        /*Object property initialized as empty strings
        that will be modified by inquirer responses*/
        this.SVGText = '',
        this.textColor = '',
        this.bgShape = '',
        this.shapeColor = '',
        this.fileName = ''
    }
    //runs inquirer prompt then calls createSVG
    run() {
        return inquirer.prompt(questions).then(({svgText, textColor, shape, shapeColor, fileName}) => {
            //sets properties to user input and calls createSVG
            this.SVGText = svgText
            this.textColor = textColor
            this.bgShape = shape
            this.shapeColor = shapeColor
            this.fileName = fileName
            this.createSVG()
        })
    }
    createSVG() {
        //converts bgShape from a string to a variable
        let backgroundShape = eval(this.bgShape)
        
        //Creates new instance of SVGText and runs the render method
        let testText = new SVGText();
        testText.setText(this.SVGText)
        testText.setColor(this.textColor)
        /*Creates new instance of one of the classes extending Shapes*/
        let newShape = new backgroundShape();
        newShape.setColor(this.shapeColor)

        //Defines the SVG and passes in the text and shape
        let SVG =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${newShape.render()}
    ${testText.render()}
</svg>`
       
        /*Creates the svg file in the assets folder or overwrites
        if a file with the same name already exists*/
        fs.writeFile(`./assets/logo.svg`, SVG, (err) => {
            err ? console.error(err) : console.log("Generated logo.svg")
        })
    }
}

module.exports = CLI