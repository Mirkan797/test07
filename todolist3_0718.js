const data = [
    {
        text: '자바스크립트 공부하기'
    },
    {
        text: '자바스크립트 복습하기'
    }
]

const data1 = [
    {
        text: '베이스 연습하기'
    },
    {
        text: '턱걸이 하기'
    },
    {
        text: '공부하기'
    }
]

const $app = document.querySelector('.app')

new TodoForm({
    $target: $app,
    onSubmit: (text) => {
        alert(text)
    }
})

const TodoList = new TodoList({
    $target: $app,
    initialState: data
})

setTimeout(() => {
    TodoList.setState([
        {
            text: 'Happy JS!!'
        }
    ])
}, 5000)