const jwt = require("jsonwebtoken")
const bcrypt  = require ("bcrypt")
const validator = require ("validator")
const fs = require('fs')
const path = require('path')
const userModel = require("../models/userModel")
// const f = require('../assets/courses/maths.json')



// read the subject 
const getSubject= (req, res)=> {
    const { subject} = req.params
    const filePath = path.join(__dirname, `../assets/courses/${subject}.json`)

    // Read the file 
    fs.readFile(filePath, 'utf8', (err, data)=> {
        if(err) {
            console.error(err)
            return res.status(500).send(`Error reading the file ${subject}` )
        }
       

        const courseSubject = JSON.parse(data)
        return res.json(courseSubject)
    })
}

// read a single course
const getCourse = (req, res)=> {
    const {subject, course} = req.params
    res.json({"course": "course here"})
}

const registerUser = async(req,res) =>{
    try {
       const {name, email, password}  = req.body
       if(!name || !email || !password){
        return res.json({success:false, message: "missing details"})
       }
       //validating email
       if(!validator.isEmail(email)){
        return res.json({success:false, message: "use a valid email"})
       }
       //checking for strong password
       if(password.length < 6){
        return res.json({success:false, message: "password must be 6 characters and above"})
       }
       //hashing password to make it secure
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password, salt)

       const userData = {
        name,
        email,
        password: hashedPassword
       }

       //saving user data to the database
       const newUser = new userModel(userData)
       const user = await newUser.save()
       const token = jwt.sign({id:user._id},  process.env.JWT_SECRET)
       res.json({success:true, token, message: "user registered successful"})
    } catch (error) {
        console.log(error)
        return res.json({success:false, message: error.message})

    }
}

const loginUser = async(req, res) =>{
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message: "user not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = jwt.sign({id:user._id},  process.env.JWT_SECRET)
            res.json({success:true, token})
        }
        else{
            return res.json({success:false, message: "invalid credentials"})
        }
    } catch (error) {
        console.log(error)
        return res.json({success:false, message: error.message})
    }
}
module.exports = {
    getSubject,
    getCourse,
    registerUser,
    loginUser
 
}