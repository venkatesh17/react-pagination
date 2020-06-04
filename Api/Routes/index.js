const express = require('express')
const router = express.Router()

const create = require('./create')
const allusers = require('./getall')


router.get('/allusers', allusers)
router.post('/create', create)



module.exports = router
