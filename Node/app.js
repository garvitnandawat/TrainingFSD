const express = require('express') ;

const app = express();

// console.log(app);
app.get('/about',(req,res)=>{
    res.send('hello from express')
})

// NOTE creating server using express

app.listen(4000,()=>{
    console.log('server is running through express')
})

// const userData = [{username : 'abc', age : 22},{username:'xyz', age ;23}]
