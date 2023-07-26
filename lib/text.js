class SVGText {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    render() {
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
    setText(str) {
        if (str.length > 3) {
            throw new Error('SVG text cannot be longer than 3 characters.')
        } else {
        this.text = str
    }
    }
    setColor(color) {
        this.color = color
    }
}

module.exports = { SVGText };