global.appPath = __dirname
global.BasicResponse = require('./Utilities/ResponseBody')
require('./Globals')
const express = require('express')
const eventEmitter = require('events')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./Routes')
const app = express()



global.serverup = new eventEmitter()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// parse requests o content-type application/json
app.use(bodyParser.json())

app.use('/v1/', routes)

httpServer = require('http').createServer(app)

httpServer.listen(process.env.PORT || 5000, () => {
  connectedMongoEmitter.on('connectedMongoDB', () => {
    console.log('server listening on Port 5000')
  })
})

//module.exports = httpServer
