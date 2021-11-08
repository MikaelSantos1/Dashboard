const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const morgan = require('morgan')
const queryParser = require("express-query-int")
require("./config/conecction")

const PORT = process.env.PORT || 8080;

app = express()

app.listen(PORT, () => {
    console.log(`App listen on port :${PORT}`)
})

app.use(queryParser())
app.use(express.json())
app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header("Acess-Controll-Allow-Origin", "*")
    res.header("Acess-Controll-Allow-Origin", "GET,POST,PUT,DELETE")
    res.header("Acess-Controll-Allow-Headers", "Acess, Content-Type, Authorization,Acept,Origin, X-requested-With")
    this.app.use(cors())
})

app.use('/api', routes)

