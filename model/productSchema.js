const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    pricing: {
        type: Number,
        required: true,
        trim: true
    },
    mrp: {
        type: String,
        required: true,
        trim: true
    },
    purchaseId:{
        type:Number,
        required:true,
        trim:true
        },
        Id:{
            type:Number,
            required:true,
            trim:true
            }

})

const productModel = mongoose.model('product',productSchema);

module.exports = productModel;