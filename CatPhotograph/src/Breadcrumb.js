export default function Breadcrumb({ $target, initialState }) {
    const $breadcrumb = document.createElement('nav')
    $breadcrumb.className = 'Breadcrumb'
    $target.appendChild($breadcrumb)

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $breadcrumb.innerHTML = `
        <div>Root</div>
        ${this.state.map(({ id, name }) => `
            <div class="Breadcrumb__item" data-id="${id}">${name}</div>
            `).join('')}
        `
    }
    this.render()

    $breadcrumb.addEventListener('click', (e) => {
        const $breakcrumb = e.target.closeset('.Breadcrumb__item')
        const { id } = $breadcrumbItem.dataset
        
    })
}