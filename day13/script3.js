// Asynchronous JS 
// console.log(window);
// console.log('Hello');

// setTimeout
// 
// setTimeout(()=>{
//     console.log("Garv Bakliwal");

// },2000);
// console.log('Hi');

// setInterval


// callbacks 
// function test(callback) {
//     setTimeout(() => {
//         const data = 'hello';
//         callback(data);
//     }, 2000)
// }
// function greet(data)
// {
//     console.log(data);
// }

// test((data) => {
//     console.log(data);
// });

// test = higher order function which accepts callback as a params
// greet = callback function which are passing in the paramete of higher order function 

// function  step1(callback){
//     setTimeout(()=>{
//         callback();
//         console.log('step 1 completed')
//     },1000)
// }

// function  step2(){
//     setTimeout(() => {
//         console.log('step 2 completed')
//     }, 2000)
//     }

// step1 (() => {
//     step2()
// })

// promises :
//it is a javascript object which is just like placeholder for the result of the asynchronous operations like fetching data from APIs 

//promises are always returned by functions

//note creating promise;

// const willYouPassinExam = new Promise((resolve,reject) => {
//     // resolve('pass')
//     reject('fail')
// })
// console.log(willYouPassinExam)

// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         const data = 'hello I am Rudra Purohit'
//         if(Math.random()>.5 ){
//             resolve(data)
//         }
//         else{
//             reject('this is rejected')
//         }
//     })
// }
// console.log(fetchdata());

// in case promise is fulfullied we have to use .then() method 
// in case promise is rejected we have to use .catch() method

// fetchdata().then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.error(err)
// }).finally(()=>{
//     console.log('it will run always either your promise fulfilled or rejected')
// });

//calling an apis using fetch() function
//NOTE fetch function always returns promise

fetch('https://restcountries.com/v3.1/all').then((res)=>{
  return res.json()
}).then((data)=>{
  
   data.forEach(element => {
       console.log(element)
       const h1 = document.createElement('h1')
       const img = document.createElement("img");
       img.style.width = '200px'
       img.src = element.flags.svg
       h1.innerText = element.name.common;
       document.body.appendChild(h1)
       document.body.appendChild(img)
    });
})
