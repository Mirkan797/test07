export default function SuggestKeywords({ $target, initialState }) {
    const $suggest = document.createElement('ul')
    $suggest.className = 'Keywords'
    $target.appendChild($suggest)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $suggest.innerHTML = `
        ${this.state.map(keyword => `
            <li>${keyword}</li>
            `).join('')}
        `
    }
    this.render()
}