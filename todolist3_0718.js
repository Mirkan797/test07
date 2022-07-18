function TodoList({ $target }) {
    const $form = document.createElement('form')

    $target.appendChild($form)

    this.render = () => {
        $form.innerHTML = `
            <input type="text" name="todo" />
            <button>Add</button>    
        `

        $form.addEventListener('submit', e => {
            e.preventDefault()
        })
    }

    this.render()
}