const inquirer = require('inquirer')
const fs = require("fs");
const {SVGText} = require('./text')
const {Square, Triangle, Circle} = require("./shapes");

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
    //method runs inquirer prompt
    run() {
        return inquirer.prompt([
            {
                type: "input",
                name: "svgText",
                message: "Please enter up to 3 characters",
                validate: function(svgText) {
                /*throws an error if user inputs a string longer than 3 characters
                but does not exit the program, allowing them to edit their response*/
                    if (svgText.length > 3) {
                        throw new Error('Character must be less than 3 characters long')
                    } else {
                        return true
                    }
                }
            },
            {
                type: "input",
                name: "textColor",
                message: "What color would you like the text to be (answer can be a color keyword or hexadecimal eg: white or #FFFFFF)"
            },
            {   //offer users a choice of shape for the background
                type: "rawlist",
                name: "shape",
                message: "what shape would you like for the background",
                choices: [
                    {
                        name: 'circle', value: "Circle"
                    },
                    {
                        name: 'triangle', value: "Triangle"
                    },
                    {
                        name: 'square', value: "Square"
                    }
                ]
            },
            {
                type: "input",
                name: "shapeColor",
                message: "What color background?"
            },
            {
                type: "input",
                name: "fileName",
                message: "What would you like to name this file?"
            }
        ]).then(({svgText, textColor, shape, shapeColor, fileName}) => {
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
        let testText = new SVGText(this.SVGText, this.textColor).render();
        /*Creates new instance of one of the classes extending Shapes 
        based on user's input and runs that class's specific render method*/
        let newShape = new backgroundShape(this.shapeColor).render();
        //Defines the SVG and passes in the text and shape
        let SVG =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${newShape}
        ${testText}
        </svg>`
        /*Creates the svg file in the assets folder or overwrites
        if a file with the same name already exists*/
        fs.writeFile(`./assets/logo.svg`, SVG, (err) => {
            err ? console.error(err) : console.log("Generated logo.svg")
        })
    }
}

module.exports = CLI