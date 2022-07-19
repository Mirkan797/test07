const storedName = localStorage.getItem('name') || ''

if (storedName) {
    document.querySelector('#name').value = storedName
}

document.querySelector('#save').addEventListener('click', () => {
    localStorage.setItem('name', document.querySelector('#name').vlaue)
})

document.querySelector('#remove').addEventListener('click', () => {
    localStorage.removeItem('name')
})

//    <html>
//        <head>
//            <title> KDT Storage Test</title>
//        </head>
//        <body>
//            <main class="app">
//                <input type="text" id="name">
//                    <button id="save">Save</button>
//                    <button id="remove">Remove</button>
//           </main>
//            <script src="./src/storageTest.js"></script>
//        </body>
//    </html>