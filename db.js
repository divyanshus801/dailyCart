const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://divyanshu:2Nta5XqD4O13GSj0@cluster0.adn03.mongodb.net/dailyCart?retryWrites=true&w=majority'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose
