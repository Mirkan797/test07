// async
import { request } from "./src/api"

const API_ENDPOINT = 'https://kdt.roto.codes'

request(`${API_ENDPOINT}/todos`, (todos) => {
    const completedTodo = todos.find(todo => todo.isCompleted)

    if(completedTodo) {
        request(`${API_ENDPOINT}/comments?todo.id=${completedTodo.id}`, (comments) => {
            comments.forEach(Comment => console.log(comment.content))
        })
    }
})

// promise
const API_ENDPOINT = 'https://kdt.roto.codes'

const todos = promsieRequest(`${API_ENDPOINT}/todos`)
    .then(todos => {
        const completedTodo = todos.find(todo => todo.isCompleted)

        if (completedTodo) {
            return promsieRequest(`${API_ENDPOINT}/comments?todo.id=${completedTodo.id}`)
        }
    })
    .then(comments => {
        comments.forEach(comment => console.log(comment.content))
    })