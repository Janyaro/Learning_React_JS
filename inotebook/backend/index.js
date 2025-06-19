const connectToDatabase = require('./db');
const express = require('express');
const port = 5000;
const app = express();
connectToDatabase();
 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user' , require('./routes/user'));
app.use('/notes', require('./routes/notes'));
app.listen(port, ()=>{
    console.log(`app is start at port number ${port}`)
})

