const { SVGText} = require('../text');

describe('SVGText', () => {
    describe('constructor', () => {
        // it('should throw an error if text is longer than 3 characters', () => {
        //     let str = "ScalableVectorGraphics"
        //     let newText = () => new SVGText(str, "white") ;
        //     let err = new Error('SVG text cannot be longer than 3 characters.')
        //     expect(newText).toThrowError(err)
        // })
        it('should take a string parameter and set it to the text property', () => {
            let newText = new SVGText('svg', 'white');
            expect(newText.text).toEqual('svg')
        })
        it('should take a color parameter and set it to the color property', () => {
            let whiteText = new SVGText('svg', 'white');
            expect(whiteText.color).toEqual('white')
        })
    })
    describe('render', () => {
        it('should return an svg text element with the correct text', () => {
            let textRender = new SVGText('car', 'white')
            let renderResult = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">car</text>`
            expect(textRender.render()).toEqual(renderResult)
        })
    })
    describe('setters', () => {
        // it('should throw an error if string is longer than 3 characters', () => {
        //     let str = "ScalableVectorGraphic"
        //     let text = new SVGText('svg', 'white');
        //     console.log(str.length)
        //     let textSetter = () =>  text.setText(str)
        //     const err = new Error('SVG text cannot be longer than 3 characters.');
        //     expect(textSetter).toThrowError(err)
        // })
        it('should set a new value for the text property', () => {
            let svgText = new SVGText('svg', 'white');
            let str = "png"
            svgText.setText(str);
            expect(svgText.text).toEqual(str)
        })
        it('should set a new value for the color property', () => {
            let svgText = new SVGText('svg', 'white')
            let col = "orange"
            svgText.setColor(col)
            expect(svgText.color).toEqual(col)
        })
    })
})