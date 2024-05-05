const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: Number,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    Id:{
        type:Number,
        required:true,
        trim:true
        }
})

const customerModel = mongoose.model('customer',customerSchema);

module.exports = customerModel;