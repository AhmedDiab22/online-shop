const express = require('express');
const productRoute = express.Router();

// Product model
let Product = require('../models/product.model');

// Add Product
productRoute.route('/add/product').post((req, res, next) => {
    Product.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All Product
productRoute.route('/all/product').get((req, res) => {
    Product.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single Product
productRoute.route('/get/:id').get((req, res) => {
    Product.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Product
productRoute.route('/update/:id').put((req, res, next) => {
    Product.updateOne({_id : req.params.id}, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

// Delete Product
productRoute.route('/delete/:id').delete((req, res, next) => {
    Product.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


module.exports = productRoute;
