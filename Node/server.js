const { log } = require('console');
const { response } = require('express');
const http = require('http') ;

const server = http.createServer((req,res)=>
{
    res.end("data is send from the server")
})

server.listen(3000,()=>{
    console.log('server is running');
    
})

http => request , response


console.log('hello hello hello');