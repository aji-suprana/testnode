const express = require('express')
const app = express()
const port = 30001

app.get('/test12345', (req, res) => res.send('Hello 123World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))