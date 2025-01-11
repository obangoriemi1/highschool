const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image:{
        type: String,
       
        default: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    }
})

const userModel = mongoose.models.user ||  mongoose.model("user", userSchema)

module.exports = userModel