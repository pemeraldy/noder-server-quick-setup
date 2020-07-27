const express = require('express')
const middleWare = require('./setup/middleware')

const app = express()

middleWare(app)

const PORT = 2000
app.listen(PORT, () => console.log('Working on port ' + PORT))