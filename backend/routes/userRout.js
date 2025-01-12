const express = require('express')
const {getCourse, getSubject,  registerUser, loginUser} = require('../controller/userController')
const router = express.Router();


// get the subject
router.get('/:subject', getSubject)

// get the a single course 
router.get('/subject/:course', getCourse)
//log in and register routes
router.post("/register", registerUser)
router.post("/login", loginUser)


module.exports = router;