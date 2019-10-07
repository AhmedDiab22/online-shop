const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema({
    name : {type : String   },
    price : { type : Number },
    imgUrl : {type : String  },
    description : { type : String },
    category : { type : String }
}, {
    collection: 'product'
});

module.exports = mongoose.model('product', Product)