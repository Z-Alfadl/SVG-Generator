const questions = [
    {
        type: "input",
        name: "svgText",
        message: "Please enter up to 3 characters to create the text of your SVG",
        validate: function(svgText) {
        /*throws an error if user inputs a string longer than 3 characters
        but does not exit the program, allowing them to edit their response*/
            if (svgText.length > 3) {
                throw new Error('Entry cannot be longer than 3 characters. Please try again.')
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like the text to be? (Answer can be a color keyword or hexadecimal eg: white or #FFFFFF)",
        when: (answer) => answer.svgText !== ''
    },
    {   //offer users a choice of shape for the background
        type: "rawlist",
        name: "shape",
        message: "what shape would you like for the background?",
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
        message: "What color would you like for the previously selected shape?"
    }
]

module.exports = questions