const API_ENDPOINT = 'http://kdt.roto.codes'

const todos = syncRequest(`${API_ENDPOINT}/todos`)
const completedTodo = todos.find(todo => todo.isCompleted)

if (completedTodo) {
    const comments = syncRequest(`${API_ENDPOINT}/comments?todo.id=${completedTodo.id}`)
    comments.forEach(comment => console.log(comment.content))
}
