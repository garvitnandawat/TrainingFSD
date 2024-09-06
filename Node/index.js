// console.log("hello")

// //note importing in the nodejs using "common js modules" ...

// //fs module 
const fs = require('fs') ;
const os = require('os') ;
const path = require('path');

// // NOTE readFileSync

// const data = fs.readFileSync('./index.txt', 'utf-8')

// console.log(data)

// //note readFile
// console.log('async file start');

// fs.readFile('./index.txt', 'utf-8',(err,data) =>{
//     console.log(data);
// })

// console.log('reading file ended') ; 


// //note writeFile and writeFileSync 

// fs.writeFileSync('./example.txt', 'GitHub')

// fs.writeFile('text.txt', 'async data' ,()=>{
//     console.log('file created');
// })

//note appendFile, appendFileSync

// fs.appendFile('index.txt', 'and append', ()=>{
//     console.log('new data added')
// })

// fs.renameSync('index.txt' , 'demo.txt')


//note operating system module 
//give the details about the system where node js is installed 

// console.log(os.hostname());
// console.log(os.cpus())
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.arch());

// NOTE path modules

//NOTE path.dirname

console.log(path.dirname('C:/Users/Asus/Documents/Node/index.js'));

//NOTE path.basename
console.log(path.basename('C:/Users/Asus/Documents/Node/index.js'));

//NOTE path.parse
console.log(path.parse('C:/Users/Asus/Documents/Node/index.js'));

//NODE path.resolve 
console.log(path.resolve('Users' , 'local' , 'bin' , 'index.js'));

console.log(path.join('Users' , 'local' , 'bin' , 'index.js'));


//__dirname , __filename
console.log(__dirname)
console.log(__filename)

const finalPath = path.join(__dirname , 'example.txt')

fs.readFile(finalPath , 'utf-8' ,(err,data)=>{
    console.log(data)
})