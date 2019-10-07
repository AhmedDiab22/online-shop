const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

let Cart = require('../models/cart.model');


router.post('/add/cart'  , (req , res , next)=>{
    const cart = new Cart({
        name : req.body.name,
        price : req.body.price,
        amount : req.body.amount,
        userId : req.body.userId,
        productId : req.body.productId,
        timestamp : Date.now()
    });
    cart.save((error)=>{
        if (error) {
            console.log(err);
        } else {
            res.json('Cart Item saved')
        }
    })
});


// Get All Product
router.get('/all/cart' , (req, res , next) => {
    Cart.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single Cart
router.get('/get/cartByUserId/:id' ,(req, res , next)  => {
    Cart.find({userId : req.params.id}, {} , {sort : {timestamp : -1}} ,  (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// getsingleCart
router.get('/get/single/cart/:id' , (req , res)=>{
    Cart.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Cart
router.put('/update/cart/:id' , (req, res, next) => {
    Cart.updateOne({_id : req.params.id}, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
});


// Delete Product
router.delete('/delete/cart/:id' , (req, res, next) => {
    Cart.findOneAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})



module.exports = router;