function TodoList({ $target }) {
    const $form = document.createElement('form')

    $target.appendChild($form)

    let inInit = false

    this.render = () => {
        $form.innerHTML = `
            <input type="text" name="todo" />
            <button>Add</button>    
        `

        if (!isInit) {
            $form.addEventListener('submit', e => {
                e.preventDefault()
                
                const text = $form.querySelector('input[name=todo]').value

                console.log(text)
            })
            isInit = true
        }    
    }

    this.render()
}