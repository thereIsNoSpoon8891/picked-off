const express = require('express')
const app = express()
const pickedRouter = express.Router()




pickedRouter.route("/")
.get((req, res, next) => {
    console.log("fires on GET request in pickedRouter file!")
    req.body = {picked: true }
    next()
})



module.exports = pickedRouter