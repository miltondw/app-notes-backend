const express = require('express')
const app = express()
const cors = require('cors')
// Settings

app.set('port',process.env.PORT || 4000)

// middlewares

app.use(cors())
app.use(express.json())

// Routes

app.use('/api/users',require('./routes/users'))
app.use('/api/notes',require('./routes/notes'))

module.exports=app