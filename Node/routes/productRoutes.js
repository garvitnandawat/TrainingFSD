const express = require('express') ;
const productController = require('../controllers/productController')
const router = express.Router();

// console.log(productController)

router.get('/getproduct', productController.getAllProduct)

router.post('/addproduct',productController.addproduct)

module.exports = router ;

