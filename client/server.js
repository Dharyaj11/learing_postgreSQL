const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hellooo World!')
    console.log('hello')
  })

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })
