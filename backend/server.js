const express = require('express');
const userRoute = require('./routes/userRout')

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/course', userRoute);


app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})