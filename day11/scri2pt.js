// DOCUMENT OBJECT MODEL (DOM)
// console.log(document);

// SELECT THE ELEMENT
// document.getElementById
const heading = document.getElementById('heading');
// console.log(heading);
// console.dir(heading);


// document.getElementsByTagName
// always returns htmlCollection which looks like an array but it is not an array
// const para = document.getElementsByTagName('p');
// console.log(para);
// console.log(para[0]);

// TASK - convert the html collection 'para' into array then loop it
// console.log([...para]);
// console.log([...para].forEach((el)=>{
//     console.log(el.innerText); 
// }));


// document.getElementsByClassName
// const list = document.getElementsByClassName('special');
// console.log(list);


// // document.querySelector
// const list2 = document.querySelector('.special');
// console.log(list2);


// // document.querySelectorAll
// const list3 = document.querySelectorAll('.special');
// console.log(list3.forEach((Element)=>{
//     console.log(Element.innerHTML);
// }));

// HTML Collection RETURN by getElementByTagName and getElemenyByClassName

//note reading text from elements;
// //note innerText, 
// heading.innerText = 'dom' ;
// //note innerText 
// heading.textContent = 'dom2' ;
// heading.innerHTML = '<span>Hello<span>' ;
// console.log(document.body.textContent)
// console.log(document.body.innerText)

const container = document.querySelector('#container');
// container.innerHTML = '<h1> SERVICES </h1>' ;

//reading href and src attributes of the anchor and img 

// const a = document.querySelector('#address');
// a.href = 'https://www.amazon.com';

// const img = document.querySelector('#bear-photo');
// img.src = 'C:\Users\Asus\Documents\Training\day11\download (2).jpg'

// NOTE changing style using JS
console.log(heading.style);
heading.style.color = 'green';
heading.style.fontSize = '30px';
heading.style.textDecoration = 'underline';

// Changing attributes using JS
const input = document.querySelector('#bear');

input.setAttribute('placeholder','enter your name'); 

console.log(input.getAttribute('placeholder'));  

//creating new elements using js ;

//first you have to create a new element
const h1 = document.createElement('h1');
console.log(h1)
//second you have to add content to it 
h1.innerText = 'DOM' ;
//third you have to decide where to place in our html file 
container.append(h1);

//events addEventListener
const btn = document.getElementById('btn') ;
btn.addEventListener('click' ,()=>{
    const p = document.createElement('p');
    p.innerText = 'Hello Garv bhai' 
    console.log(p);
    document.body.prepend(p)
    // document.body.append(p)

    //append add element to the last and prepend adds element to the top 
})

document.addEventListener('keydown' , (event)=>{
    if(event.key === 'b'){
        document.body.style.backgroundColor = 'blue'}
        else if(event.key === 'r'){
            document.body.style.backgroundColor = 'red'
        }
        else if(event.key === 'g'){
            document.body.style.backgroundColor = 'green'
        }
    
})
