class SVGText {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    render() {
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
    setText(str) {
        this.text = str
    }
    setColor(color) {
        this.color = color
    }
}

module.exports = { SVGText };