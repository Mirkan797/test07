function TodoList(params) {
    const $target = params.$target
    const $todoList = document.createElement('div')

    $target.appendChild($todoList)

    this.state = params.initialState

    this.render = () => {
        $todoList.innerHTML = `
        <ul>
            ${this.state.map(todo => `<li>${todo.text}</li`).join('')}
        </ul>
        `
    }

    this.render()
}