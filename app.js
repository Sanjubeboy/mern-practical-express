const express = require('express')
const app = express()
const PORT = 3500
const http = require('./Routes/httpRoute')

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Its working..')
})

app.use('/api/v1/http', http)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})