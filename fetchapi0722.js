const $image = document.createElement('ing')

const imageUrl = 'http://indistreet.com/_next/image?'

fetch(imageUrl)
    .then(res => {
        return res.blob()
    })
    .then(blob => {
        console.log(blob)
        const objectURL = URL.createObjectURL(blob)
        console.log(objectURL)
        $image.src = objectURL

        document.querySelector('body').appendChild($image)
    })