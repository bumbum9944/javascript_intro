// let 키워드는 같은 이름의 변수를 1번만 선언 가능
//  할당은 여러번 할 수 있다.
// let x = 1
// // let x = 2
// x = 3
// console.log(x)

// block scope 블록 유효범위
// let x = 1

// if (x === 1) {
//     let x = 2
//     console.log(x)
// }
// console.log(x)

// let x
// 상수인 const키워드는 초기화가 필요하다.
// const y = 9
// const는 변경할 수 없다.
// y = 10

// if (y === 9) {
//     let y = 20
//     console.log(y)
// }
// console.log(y)

// def varTest(): 와 동일
// var는 function 레벨의 블럭을 갖는다.
// function varTest() {
//   var x = 1
//   if (true) {
//     var x = 2
//     console.log(x)
//   }
//   console.log(x)
// }
// varTest()
// console.log(x)

// var : 선언, 할당 => 자유 / 함수 스코프
// let : 할당 => 자유 / 블록 스코프
// const : 할당, 선언 => 한번만 / 블록 스코프

// let dog
// let variableName

// let dogs = []

// function getName() {

// }

// 이벤트를 만들 때는 앞에 on을 붙인다.
const onClick = () => {}
// true, false 값을 갖는 경우 앞에 is를 붙임
let isValid = false

class User {
  constructor(){
    this.name = value.name
  }
}

// 이렇게 선언된 것들은 절대 안바뀌는 것을 뜻함
// const API_KEY = "asdf:12345689"

// const a = 13
// const b = -5
// const c = 3.14
// const d = 2.9e8
// const e = Infinity
// console.log(typeof e)
// 컴퓨터가 갖고 있는 범위를 넘어서면 Infinity로 출력된다.
// const f = -Infinity
// const g = NaN
// console.log(Math.sqrt(-2))

// const sentence1 = 'hello\n'
// const sentence2 = "hello"
// const sentence3 = `helloworld${sentence2}`
// console.log(sentence3+sentence1)

// const isValid = true // false

let first_name
console.log(typeof first_name) // undefined

let last_name = null
console.log(typeof last_name) // null

console.log(null === undefined)
console.log(null + 1)

console.log(first_name+1)