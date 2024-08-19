console.log(console)
console.log('JS');

//value and variables 
//data types ;

// NOTE dataTypes

// NOTE primitive

//1. String
// 2. number 
// 3.boolean
// 4. null
// 5. undefined
// 6 big int 
// 7 symbol

// note non-primitve
// array ={}
// object ={}

// string 
// variable declaration 
//FIXME - always use camelCase ;

// let isJsFun first letter small 
let firstName = 'Garvit' ;
console.log(firstName)

console.log(typeof firstName);

//NOTE NUMBER TYPE 

let age = 20;
console.log(typeof age)

//note boolean type 

let isJSFun = true;
console.log(typeof isJSFun)

//note Undefined ;
let college ;
console.log(college)
console.log(typeof college)

// note null 
let department = null;
console.log(typeof department)

//todo - keywords used to declare the variables ;

// note var < let < const 

// note - var
// note in the case var we can redeclare and reassign the variable 

var lastname ='singh';
lastname ='sharma' ;
console.log(lastname)

// review - redeclare ;
var fruit = 'mango';
console.log(fruit)
var fruit = 'grapes';
console.log(fruit)

//note let
//note reassign(✓) redeclare(✕);
let company='meta';
company = 'netflix';
console.log(company)

//const 
//note reassign✕ redeclare✕ ;
// let it can assign but not redclare 
let abc ="xyz";
abc= "fgh";
console.log(abc)
// let abc="happy"; this is not possible 

// const : redeclare and reassign both are not possible 
const due="date ";
// due="happy"; this is not possible 
console.log(due)
// const due ="happy"; this is not possible 


// operators 
// arithematic (+,-,%,/, exp or**)
// assignment (=,+=,-=,*=,/=)
let x=5;
// x=x+5 or x+=5 is same
x+=5;
console.log(x) 
// logical 
// comparison(==,===,!=,!==,>,<,>=,<=)
const a=5;
const b='5';
console.log(a==b)
// == this is loose equality and === strict equality 
// loose quality will not check the data type but strict equality will check
 console.log(5!='5')  //this is  loose not equality
 console.log(5!=='5')// this is strict not equality

 //note logical( ||, &&, !);

 // prompt , alert 

//  const firstNamee = prompt('enter your name')
//  console.log(firstNamee)

 username='admin'
 password ='admin123'

// note create two prompt one for username and other for password , use && logical operator to check if the username == admin and pasword == admin123, if both conditons are true then print console.log('auhtentication succesfull') else console.log('authentication failed')

//note type coersion and type conversion ;

// note implicit when javascript internally convert the type of variable from the datatype to another

const c ='3'+'3' ;
console.log(typeof c);

const sub = 7 -'4';
console.log(sub)


const bol = true +1;
console.log(bol)
console.log(typeof bol)

const d =+'5';
console.log(d)
console.log(typeof d )

//note type conversion 
const num = 5;
console.log(typeof String(num))

const str='true';
console.log(typeof Boolean(str))

//note template string 
const firstnAme = 'abc';
const lastnAme = 'xyz';

// const fullDetails = 'my' + ' ' + 'name' + ' ' + 'is' + firstnAme ;

// ternary operator 
// condition ? if true this will run : not true then this will run 
const O = age > 18 ? 'you are a major' : 'you are a minor' 
console.log(O) ;


//TODO------- types of Functions---------------

//function declaration 

mydetails('ghj' , 'jvk');
function mydetails(fnAme , lAme){
console.log('My name is ${fnAme} ${lAme}')
}
//function expression ;
sum(4,5);
const sum = function(x,z){
    return x + z ;
}
// arrow Function ;

//note single line arrow function 
const subs =(a,b) => b-a ;

//note multi line arrow function 

const mutliply = (a,b) => {
    return a*b ;
}



