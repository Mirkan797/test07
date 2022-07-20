function syncRequest (url) {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, false)
    xhr.send()

    if (xhr.status === 200) {
        return JSON.parse(xhr.responseText)
    } else {
        throw new Error(xhr.statusText)
    }
}