const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
    address: {
        type: String,
         required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    pincode: {
        type: Number,
        required: true,
        trim: true
    },
    purchaseId: {
        type: Number,
        required: true,
        trim: true
    },
    Id:{
        type:Number,
        required:true,
        trim:true
        }
})

const shippingModel = mongoose.model('shipping',shippingSchema);

module.exports = shippingModel;