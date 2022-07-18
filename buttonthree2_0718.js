// 버튼을 3개를 만든다.
const $button1 = document.createElement('button')
$button1.textContent = 'Button1'

const $button2 = document.createElement('button')
$button2.textContent = 'Button2'

const $button3 = document.createElement('button')
$button3.textContent = 'Button3'

// 만든 버튼을 화면에 그린다.
const toggleButton = ($button) => {
    if ($button.style.textDecoration === '') {
        $button.style.textDecoration = 'line-through'
    } else {
        $button.style.textDecoration =''
    }
}

//버튼을 클릭하면 삭선이 그어진다
document.querySelector('#app').appendChild($button1)
document.querySelector('#app').appendChild($button2)
document.querySelector('#app').appendChild($button3)

document.querySelectorAll('#app button').forEach($button => $button.addEventListener('click', (e) => {
    toggleButton(e.target)
}))