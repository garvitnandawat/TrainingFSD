const product = require('./../product')

exports.getAllProduct = (req,res)=>{
    console.log(req.name)
    
    res.status(200).json({
        length : product.length,
        data : product
    });
}  


exports.addproduct = (req,res)=>{
    // console.log(req.body)
    const newData = req.body;
    newData.id = product.length+1
    product.push(newData)
    
    res.json({
        data : product
    });
    
}
