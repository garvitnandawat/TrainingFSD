const http = require('http');
const path = require('path');
const fs = require('fs');
const EventEmitter = require('events')

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/about' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'about.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.end('err');
      } else {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data);
      }
    });

    //NOTE always use writeHead method before sending the response
  } else if (req.url === '/services') {
    res.end('service page');
  } else {
    // res.end('home page');
  }
});

server.listen(3000, () => {
  console.log('Server is running');
});

// setTimeout(()=>{
//   server.close()
// },10000)
server.on('request',()=>{
  console.log("request is made")
})


server.on('close',()=>{
  console.log('server is close')
})

// http => request  , response

// npm i nodemon -g --save-dev


//REVIEW req.method => we have different req methods we can use to send request from client. to the server most common used methods are. : 
//NOTE GET => used to get the data from backend.
//NOTE POST => used to send data for the processing in the backend.
//NOTE PUT => used to update or replace the data.
//NOTE PATCH => used to perform partial update.
//NOTE DELETE => used to delete any entry in the backend.


//TODO http , http  status code , request and response object , http methods , request-response cycle , web server , request and response headers  ..

//NOTE EVENT MODULE NODE JS (OBSERVER PATTERN IN THE NODEJS)  ;

const event = new EventEmitter() ;

//NOTE create a listener which listen to the event name party whenever the event named party emitted the attached callback in the listener automatically run.

event.on('party', ()=>{
  console.log('party started')
})

//NOTE we have emitted a event named party
event.emit('party')

event.on('sale' , ()=>{
  console.log('sale has started')
})

event.emit('sale')