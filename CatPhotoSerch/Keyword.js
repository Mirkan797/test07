export default function Keyword({ $target, onKeywordInput }) {
    $keyword.className = 'Keyword'

    $target.appendChild($keyword)

    $keyword.addEventListener('keyup', e => {
        onKeywordInput(e.target.value)
    })
}