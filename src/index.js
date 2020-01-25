const express = require('express')
const router = express.Router()

// import Routes
let routeNav = require('./router/router')

router
  .use('/api/v1/', routeNav)

module.exports = router