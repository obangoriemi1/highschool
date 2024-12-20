const express = require('express')
const {getCourse, getSubject} = require('../controller/userController')
const router = express.Router();


// get the subject
router.get('/:subject', getSubject)

// get the a single course 
router.get('/:subject/:course', getCourse)


module.exports = router;