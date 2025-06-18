const mongoose = require('mongoose');

const connectToDatabase = ()=>{
    mongoose.connect('mongodb://localhost:27017/mydata').then((e)=>{
        console.log("database connect successfully")
    }).catch((err)=>{
        console.log("connect failed ")
    })
}

module.exports = connectToDatabase;