const express = require("express");
const mongoose = require("mongoose");
// const authRouter = require('./router/auth');
const cors = require('cors')
const customerSchema = require('./model/userSchema');
const productSchema = require('./model/productSchema');
const shippingSchema = require('./model/shippingSchema');
const customerModel = require("./model/userSchema");
const shippingModel = require("./model/shippingSchema");
const productModel = require("./model/productSchema");



const app = express();

app.use(cors({origin: true, credentials: true}));
// Middleware
app.use(express.json());
const middleware = (req,res,next)=>{
    console.log(`hello my middleware`);
    next();
}

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/adminpanel").then(()=>console.log(`connected`));


app.post("/users",(req,res)=>{
    customerModel.create(req.body)
    .then((data)=> res.json(data))
    .catch((err=> res.json(err)))
})
app.post("/product",(req,res)=>{
    productModel.create(req.body)
    .then((data)=> res.json(data))
    .catch((err=> res.json(err)))
})
app.post("/shipping",(req,res)=>{
    shippingModel.create(req.body)
    .then((data)=> res.json(data))
    .catch((err=> res.json(err)))
})


app.get('/',(req,res) => {
    res.send(`hello world from the server`);
})

app.get('/about',(req,res)=>{
    res.send(`hello about world from the server`)

})

app.listen(3000,()=>{
    console.log(`listening to the port 3000`);
})

app.get('/',(req,res) => {
    customerSchema.find().then((users)=> res.json(users))
    .catch((err)=> res.json(err));
})
app.get('/',(req,res) => {
    productSchema.find().then((users)=> res.json(users))
    .catch((err)=> res.json(err));
})
app.get('/',(req,res) => {
    shippingSchema.find().then((users)=> res.json(users))
    .catch((err)=> res.json(err));
})