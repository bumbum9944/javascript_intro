// alert("hello world!!!!")

// 여기는 주석입니다.
/*
여기서부터
여기까지는
주석입니다.
*/

document.write('<h1>hello world</h1>')

// h1태그를 가져와
// document.querySelector('h1')

// 가져온 태그의 내부 text를 바꿔줘
// document.querySelector('h1').innerText = "bye"

// 변수 선언
// var name = "kgb"
// print
// console.log(name)

// var b = 30

// for (var b = 0 ; b < 10 ; b++) {
//     console.log(b)
//     // 0, 1, 2 ...
// }
// console.log('!!!!!!!!!!!!!!!!')
// console.log(b)

// 재할당 가능
let name = 'kgb'
document.write(name)

name = 'bum'
document.write(name)

// 재할당 불가능
// const loca = 'GJ'
// document.write(loca)

// loca = 'seoul'
// document.write(loca)

const first_name = 'gibeom'
const last_name = 'kim'

const full_name = last_name + first_name

document.write('<h1>'+full_name+'</h1>')
// 백틱 사용시 문자열 안에 변수 넣는거 가능
document.write(`<h1>${full_name}</h1>`)
console.log(`<h1>${full_name}</h1>`)

const userName = prompt("hello who are you???")
let message = ``


if (userName === 'gibeom') {
  message = `<h1>admin page</h1>`

}else if (userName === 'happy') {
  message = `<h1>happy coding</h1>`

}else{
  message = `<h1>hello! ${userName}</h1>`

}
document.write(message)

//  ==은 안에 있는 값만 비교 ===은 값과 타입 비교

const num1 = 0
const num2 = "0"
//  느슨한 같음(값을 비교)
console.log(num1 == num2)
//  엄격한 같음(타입을 비교)
console.log(num1 === num2)