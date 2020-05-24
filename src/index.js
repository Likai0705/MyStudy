/*  //class01
let a = 1
console.log(a)*/

// class02
// var a = "LiKai"
// console.log(a)
// window.onload = function () {
//     console.log('onload:' + a)
// }

// {
//     var a = "李凯"
// }

// {
//     let a = "李凯"
// }
//
// console.log(a)

// for(let i=0;i<10;i++) {
//     console.log('inner loop:' + i)
// }
//
// console.log('out loop: ' + i)

// const a = 'likai'
// // // var a = '李凯'
// // //  a = '李凯'
// // console.log(a)

// class 03 变量解构

// let a = 0
// let b = 1
// let c = 2

// 简单数组解构
// let [a, b, c] = [3, 4, 5]
// console.log(a, b, c)

//数组模式和赋值模式统一
// let [a, [b, c], d] = [1, [2, 3], 4]
// console.log(a, b, c, d)

// 解构默认值
// let [foo=true] = [];
// console.log(foo)

// let [a, b='likai'] = ['吉大工易']
// let [a, b='likai'] = ['吉大工易', undefined]
// let [a, b='likai'] = ['吉大工易', null]
// console.log(a+b)
//
// // let {name, job} = {name: 'likai', job: 'software engineer'}
// let {name, job} = { job: 'software engineer', name: 'likai'}
//
// console.log(name, job)

// let foo;
// ({foo} = {foo: 'likai'})
// console.log(foo)

const [a,b,c,d,e] = 'likai'
console.log(a,b,c,d,e)
