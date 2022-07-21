export function request (url, successCallback, failCallback) {
    const xhr = new XHLHttpRequest()
    xhr.addEventListener("load", (e) => {
        if (xhr.readyState === 4) {
            if (xhr.status == 200) {
                uccessCallback(JSON.parse(xhr.reponseText))
            } else {
                failCallback
            }
        }
    })
    xhr.addEventListener('error', (e) => failCallback(xhr.statusText))

    xhr.open('GET', url)
    xhr.send()
}