const storedName = sessionStorage.getItem('name') || ''

if (storedName) {
    document.querySelector('#name').value = storedName
}

document.querySelector('#save').addEventListener('click', () => {
    sessionStorage.setItem('name', document.querySelector('#name').value)
})

document.querySelector('#remove').addEventListener('click', () => {
    sessionStorage.removeItem('name')
})
