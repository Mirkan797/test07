function App({ $target, initialState }) {
    new TodoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...TodoList.state, { text }]
            TodoList.setState(nextState)
        }
    })

    const TodoList = new TodoList({
        $target,
        initialState
    })
    
}