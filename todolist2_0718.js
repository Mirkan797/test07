// params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼트
// params.initialState - 해당 컴포넌트의 초기 상태
function TodoList(params) {
    const $todoList = document.createElement('div');
    const $target = params.$target;
    $target.appendChild($todoList);

    this.state = params.initialState;

    this.render = () => {
        let html = ''

        for(let i = 0; i < this.state.length; i++) {
            html += `<li>${this.state[i].text}</li>`;
        }

        html = `<ul>${html}</ul>`;

        $todoList.innerHTML = html;
    }
}