const express = require('express')
const app = express()
const port = 30001

app.get('/test123', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))