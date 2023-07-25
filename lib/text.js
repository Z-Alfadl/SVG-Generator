class SVGText {
    constructor(word, color) {
        this.word = word;
        this.color = color;
    }
    render() {
        return `<text x="150" y="120" font-size="60" text-anchor="middle"
                     fill="${this.color}">${this.word}</text>`
    }
}

module.exports = {SVGText};