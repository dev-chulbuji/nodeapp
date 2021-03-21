const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  const sourceIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json(`source ip :: ${sourceIp}`)
})

app.get('/healthz', (req, res, next) => {
  res.json(true)
})

app.listen(port, () => console.log(`server is running on ${port}`))