// // function scope 밖에 있는거는 안에서 참조가 된다.
// var a = 0
// function testA(){
//     for (a=0; a<5; a++){
//         console.log(a)
//     }
//     console.log(a)
// }
// testA()
// console.log(a)

// // block scope
// let a = 0
// for(a=0; a<5; a++){
//     console.log(a)
// }
// console.log(a)


// // 오브젝트나 array이에서 내부 데이터 바꾸는 것은 변수 재할당이 아니다.
// const user = {
//     name: 'change',
//     phone: 'iphone',
// }
// user = {}
// user.name = "ochange"
// console.log(user)

// // const는 재할당 불가능 let은 재할당 가능 따라서 for문을 돌릴 때는 let사용 그 외에는 
// // 보통 const 사용
// let user2 = {
//     name: 'change',
//     phone: 'iphone',
// }
// user = {}
// console.log(user)


// // 데이터들의 타입 확인
// console.log(typeof '123') // string
// console.log(typeof 123) // number
// console.log(typeof true) // boolean
// console.log(typeof null) // object
// console.log(typeof undefined) // undefined
// console.log(typeof NaN) // number (숫자인데 숫자가 아닌 놈 / 나눗셈 잘못하거나 등등)
// console.log(typeof {}) // object
// console.log(typeof function(){}) // function
// console.log(typeof []) // Array는 object


// // array method
// const myArray = [0, 1, 2, 3, 4, 5]
// // 여기서는 음수 인덱스 접근이 안된다
// console.log(myArray[3])
// console.log(myArray.length)


// console.log(myArray.reverse())
// // 원본이 바뀐다
// console.log(myArray.push(6))
// console.log(myArray.pop())
// console.log(myArray.unshift(-1))
// console.log(myArray.shift())
// console.log(myArray)

// // 내부 데이터 수정 x

// console.log(myArray.includes(0))
// console.log(myArray.includes(100))
// console.log(myArray.indexOf(3))
// // 없는 자료는 -1이 나옴
// console.log(myArray.indexOf(100))
// console.log(myArray.join('-'))
// console.log(myArray)

// // object

// const endGame = {     
//     title: '어벤져스: 엔드게임',      
//     myLovers: [         
//         {name: '아이언맨', actor: '로다주'},         
//         {name: '헐크', actor: '마크 러팔로'}     
//     ] 
// }
// console.log(endGame.title)
// // 이거는 잘 안쓴다
// // console.log(endGame['title'])
// console.log(endGame.myLovers)
// console.log(endGame.myLovers[1].actor)


// const welcome = function(){
//     console.log('책방에 오신걸 환영합니다.')
// }

// const comics = {    
//     'DC': ['Aquaman', 'SHAZAM'],    
//     'Marvel': ['Captain Marvel', 'Avengers'] 
// } 
// const magazines = null  
// // key와 value가 같다면  a:a구조가 아닌 a로 축약 가능
// const bookShop = {  
//     comics,  
//     magazines, 
//     greeting: welcome
// }

// bookShop.greeting()


const phone = {
    status: false,
    model: 'galaxy note 10',
    number: '010-123-123',
    phoneBook: [
        '123456',
        '789789'
        ],
    methods: {
        call: function(number){
            console.log(number)
        },
        // on: function(model){
        //     console.log(`${model} 전원 on`)
        // },
        // off: function(model){
        //     console.log(`${model} 전원 off`)
        // },
        powerOff: function(){
            this.status = false
            console.log(`전원상태 ${this.status}`)
        },
        powerOn: function(){
            this.status = true
            console.log(`전원상태 ${this.status}`)
        },
        // arrow function 최상단을 가리킨다. 여기서는 브라우저가 없으니까 빈리스트 출력
        arrow: ()=>{
            console.log(this)
        },
        // function은 자신을 가리킨다. 즉 매서드 정의 시 arrow function은 쓰지 않는다.
        keyword: function(){
            console.log(this)
        },
        // numberChange: function(newNumber){
        //     this.number = newNumber
        //     console.log(this.number)
        // },
        // 이렇게도 쓸 수 있음 위랑 완전히 같은 형태
        numberChange(newNumber){
            this.number = newNumber
            console.log(this.number)
        }
    }
}

// phone.methods.powerOff()
// phone.methods.powerOn()
// phone.methods.arrow()
// phone.methods.keyword()
phone.methods.numberChange('010-456-456')