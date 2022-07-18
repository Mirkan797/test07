function ToggleButton({
    $target,
    text
}) {
    const $button = document.createElement('button')
    let isInit = false
    
    this.toggle = () => {
        if ($button.style.textDecoration === '') {
            $button.style.textDecoration = 'line-through'
        } else {
            $button.style.textDecoration = ''
        }
    }
    this.render = () => {
        $button.textContent = text
        if (!inInit) {
            $target.appendChild($button)
            $button.addEventListener('click', () => {
                this.toggle()
            })
            isInit = true
        }
    }

    this.render()
}