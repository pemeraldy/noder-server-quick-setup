const express = require('express')
const middleWare = require('./setup/middleware')
const dbSetup = require('./setup/db')

const app = express()
const PORT = 2000

middleWare(app)

dbSetup()
    .then((client) => {
        console.log(client)
        app.listen(PORT, () => console.log('Working on port ' + PORT))

    }).catch(console.error)
