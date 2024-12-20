
const fs = require('fs')
const path = require('path')
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


module.exports = {
    getSubject,
    getCourse,
 
}