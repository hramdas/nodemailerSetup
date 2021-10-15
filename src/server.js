const express = require('express');
const connect = require("./config/db")
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

const userController = require('./controller/user')
app.use('/users', userController)


app.listen(2200, async ()=>{
    await connect()
    console.log('listening on 2200')
})

