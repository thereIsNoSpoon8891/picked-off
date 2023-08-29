const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('dev'))

app.use((req, res, next)=> {
    console.log("fires on ALL requests")
    
    next()
})

app.use("/picked", require('./routes/pickedRouter'))


app.get("/picked", (req, res)=> {
    console.log("sent response")
    res.send(req.body)
})





app.listen(8800, () => console.log("server up on port 8800"))