const questions = [
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
]

module.exports = questions