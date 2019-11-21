// // 선언식
// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(2, 10))
// // 표현식
// const sub = function(num1, num2) {
//     return num1 - num2
// }
// console.log(sub(2, 10))

// 함수 표현식
// const ssafy1 = function(name) {
//     console.log(`hello ${name}`)
// }
// ssafy1('change')
// // 화살표 함수, arrow function
// const ssafy2 = (name) => {
//     console.log(`hello ${name}`)
// }
// ssafy2('changhee')

// // 화살표 함수 소괄호 생략, 단, 매개변수가 하나일 때
// const ssafy3 = name => {
//     console.log(`hello ${name}`)
// }
// ssafy2('changhee')

// // 화살표 함수 중괄호 생략, 표현식이 하나일 때
// const ssafy4 = name => `hello ${name}`
// console.log('changhee')

// let square = function(num) {
//     return num ** 2
// }

// square = (num) => {
//     return num ** 2
// }
// square = num => {
//     return num ** 2
// }
// square = num => num ** 2

// console.log(square(2))

// let noArgs = _ => 'no args'
// noArgs = _ => 'no args'
// console.log(noArgs())

// const a = {}
// console.log(typeof a)
// let returnObject = () => ({key: 'value'})

// // 인자 없을 때 기본 값 줄 수 있다
// const hello = (name="ssafy") => `hello ${name}`
// console.log(hello())


// // 기명 함수
// const hello = function (name) {
//     console.log(name)
// } 
// hello("change")
// // 익명 함수 (1회용 데이터나 콜백에서 사용)
// (function (name) {
//     console.log(name)
// }) ("change")