const express = require('express') ;

const app = express();
const port = 4000 ;
const product = require('./product')

app.use(express.json())

// console.log(app);
// app.get('/about',(req,res)=>{
//     res.send('hello from express')
// })

// NOTE creating server using express


// const userData = [{username : 'abc', age : 22},{username:'xyz', age ;23}]

//NOTE Read 
//accepts two params for api' second 

app.get('/api/v1/getproduct', (req,res)=>{
    res.status(200).json({
        length : product.length,
        data : product
    })
} ) 
// res.send(200).send(product)  


//NOTE fetching single product data 
//NOTE how to send the id in url and retrieve it .

app.get('/api/v1/singleproduct/:id' , (req,res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id)
    const filterProduct = product.filter((product)=>{
        return product.id === id
    })
    
})

//NOTE creating new product POST method 

app.post('/api/v1/addproduct',(req,res)=>{
    console.log(req.body)
    const newData = req.body;
    newData.id = product.length
    product.push(newData)
    
    res.json({
        data : newData
    })
    
})

app.listen(port,()=>{
    console.log('server is running through express')
})