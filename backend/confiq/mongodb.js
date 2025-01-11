const mongoose = require("mongoose")

const connectMongodb = async() =>{
  mongoose.connect(`${process.env.MONGODB_URI}/atsa-elearning`)

  await mongoose.connection.on('connected', () =>{
    console.log("Database connected")
  })
}

module.exports = connectMongodb