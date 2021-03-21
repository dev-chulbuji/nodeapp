const express = require('express')
const app = express()
const health = require('@cloudnative/health-connect');
const port = 3000
const appVersion = process.env.APP_VERSION

let healthCheck = new health.HealthChecker();

app.get('/ready', health.ReadinessEndpoint(healthCheck))
app.get('/healthz', health.LivenessEndpoint(healthCheck))

app.get('/', (req, res, next) => {
  const sourceIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json(`source ip :: ${sourceIp}`)
})

app.listen(port, () => console.log(`app version is ${appVersion} & server is running on ${port}`))