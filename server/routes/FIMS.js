const express = require('express')
const router = express.Router()

const fimService = require('../services/fimServices')

router.get('/', fimService.checkSrv)
router.get('/checkDB', fimService.checkDB)

router.get('/profit', fimService.profit)
router.post('/addTransaction',fimService.addTransaction)


module.exports = router