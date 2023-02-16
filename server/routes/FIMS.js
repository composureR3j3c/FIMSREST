const express = require('express')
const router = express.Router()

const fimService = require('../services/fimServices')
const fimLedService = require('../services/fimLedServices')

router.get('/', fimService.checkSrv)
router.get('/checkDB', fimService.checkDB)

router.get('/profit', fimService.profit)
router.post('/addTransaction',fimService.addTransaction)

router.get('/asset', fimService.asset)
router.post('/addAsset',fimService.addAsset) 

router.get('/payable', fimLedService.payable)
router.post('/addPayable',fimLedService.addPayable)

router.get('/recievable', fimLedService.recievable)
router.post('/addRecievable',fimLedService.addPayable)

router.post('/delete',fimService.deleteRecord)

router.get('/asset', fimService.asset)
router.post('/addAsset',fimService.addAsset)

router.get('/currency',fimService.curr)

router.post('/pay',fimLedService.addPayment)
router.post('/payDet',fimLedService.detPayment)
router.post('/buy',fimLedService.addBUY)

module.exports = router