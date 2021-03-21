const express = require('express')
const app = express()
const port = 3000

const appVersion = process.env.APP_VERSION

app.get('/', (req, res, next) => {
  const sourceIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json(`source ip :: ${sourceIp}`)
})

app.get('/healthz', (req, res, next) => {
  res.json(true)
})

app.listen(port, () => console.log(`app version is ${appVersion} & server is running on ${port}`))