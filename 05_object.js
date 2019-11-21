const me = {
    name: 'change',
    'phone number': '1577-1577',
    product: {
        phone: 'iphone',
        notebook: 'mac',
    }
}
// console.log(me['name']) // 되긴 하지만 .접근을 주로 사용
// console.log(me.product.notebook)

// let books = ['javascript', 'python']
// let comics = {

//     DC: ['Aquaman', 'Superman'],
//     Marvel: ['Avengers', 'Ironman'],
// }

// let bookStore = {
//     books,
//     comics
// }
// console.log(bookStore)

// JSON
const jsonData = JSON.stringify(me)
console.log(me)
console.log(jsonData)

// json형식은 사용이 안되므로 object형식으로 바꿔서 사용한다.
const parseData = JSON.parse(jsonData)
console.log(parseData)