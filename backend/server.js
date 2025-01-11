const express = require('express');
const dotenv = require("dotenv").config()
const userRoute = require('./routes/userRout.js')
const connectMongodb = require("./confiq/mongodb")
const cors = require("cors")

const app = express();
connectMongodb()
app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/course', userRoute);
app.use('/api/student', userRoute);


app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})