// let colors = ['red', 'green', 'blue']

// for (let color of colors) {
//     console.log(color)
// }

// colors.forEach(function(color){
//     console.log(color)
// })


// function(){} ==>> ()=>{}
// colors.forEach((color) => {
//     console.log(color)
// })

// colors.forEach(color => {
//     console.log(color)
// })

// function handlePosts(){
//     const posts = [
//         {id: 50, title: "javascript"},
//         {id: 100, title: "python"},
//         {id: 123, title: "css"},
//     ]
//     for (let i = 0 ; i < posts.length ; i++) {
//         console.log(posts[i])
//         console.log(posts[i].id)
//         console.log(posts[i].title)
//     }
// }

// function handlePosts(){
//     const posts = [
//         {id: 50, title: "javascript"},
//         {id: 100, title: "python"},
//         {id: 123, title: "css"},
//     ]
//     posts.forEach(post => {
//         console.log(post)
//         console.log(post.id)
//         console.log(post.title)
//     })
// }
// handlePosts()

// const images = [
//     {height: 10, width: 20},
//     {height: 14, width: 25},
//     {height: 50, width: 15},
// ]
// const areas = []


// images.forEach(image => {
//     areas.push(image.height * image.width)
// })

// console.log(areas)

// const numbers = [1, 2, 3, 4, 5]
// const doubleNumbers = []

// numbers.forEach(function(number){
//     doubleNumbers.push(number*2)
// })

// const double = numbers.map(function(number){
//     return number*2
// })

// const double = numbers.map(number=>number*2)

// console.log(double)


// // map을 사용하여 넓이 만들기
// const images = [
//     {height: 10, width: 20},
//     {height: 14, width: 25},
//     {height: 50, width: 15},
// ]

// const area = images.map(function(image){
//     return image.height * image.width
// })
// const areas = images.map(image=>image.height * image.width)
// console.log(areas)

// // filter 사용해보기

// // const numbers = [1,2,3,4,5]

// const evenNumber = numbers.filter(function(number){
//     return number % 2 === 0
// })
// console.log(evenNumber)

// const products = [
//     {name: 'cucumber', type: 'vegetable'},
//     {name: 'banana', type: 'fruit'},
//     {name: 'carrot', type: 'vegetable'},
//     {name: 'apple', type: 'fruit'},
// ]

// const fruits = products.filter(function(product){
//     return product.type === 'fruit'
// })
// const fruits = products.filter(product=>product.type === 'fruit')
// console.log(fruits)

// // reduce 사용하기

// const scores = [100, 80, 88, 92, 95, 70]
// // 인자 2개 들어갔으므로 소괄호 생략 x
// const total = scores.reduce((total, score)=>{
//     return total += score
// }, 0) 
// const total = scores.reduce((total, score) => total += score, 0) // 이렇게는 되는 것만 확인하자
// console.log(total)

// // find 사용하기 

// const users = [
//     {name: 'change', location: 'gj'},
//     {name: 'justin', location: 'gm'},
//     {name: 'tak', location: 'dj'},
//     {name: 'junho', location: 'dj'},
//     {name: 'neo', location: 'seoul'},
// ]

// user = users.find(function(user){
//     return user.name === 'neo'
// })
// // 첫번째 요소 만나면 그 다음은 검사하지 않음
// user = users.find(function(user){
//     return user.location === 'dj'
// })
// console.log(user)