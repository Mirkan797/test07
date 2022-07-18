const data = [
{
    name: '나나',
    colors: ['yellow', 'white'],
    age: 7,
    ear: 'unfolded'
},
{
    name: '차이',
    colors: ['white', 'yellow', 'brown'],
    age: 3,
    ear: 'unfolded'
},
{
    name: '모나',
    colors: ['black', 'white'],
    age: 2,
    ear: 'unfolded'
},
{
    name: '레이',
    colors: ['gray', 'white'],
    age: 7,
    ear: 'unfolded'
},
{
    name: '가상의 고양이',
    colors: ['gray', 'black'],
    age: 10,
    ear: 'folded'
}, 
null,
]

// 털 색이 까만색이 포함되어 있으면서
// 귀가 접혀있지 않은 고양이들을 뽑기
function filterCats(cats) {
    return cats.filter(cat => cat &&
        cat.colors.includes('black') &&
        cat.ear === 'unfolded'
        ).map(cat => cat.name)
}
 
const filteredCatsName = filterCats(data)
console.log(filteredCatsName)
document.querySelector('body').innerHTML = filterCatsName