const express = require('express')
const cors = require('cors')
const pool = require('./config/database')

const app = express()
const PORT = process.env.PORT || 3000
const router = require('./config/routes')

app.use(express.json())
app.use(cors())
app.use('/auth', router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})