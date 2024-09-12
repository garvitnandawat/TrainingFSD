const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('Mongodb Connected')
});
const app2 = express();



app2.listen(8000,()=>{
    console.log('server is running on 8000')
})

