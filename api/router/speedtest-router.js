const express = require('express')
const router = express.Router()
const speedtestController = require('../controller/speedtest-controller')

const speedtestCtrl = new speedtestController()

router.get('/', speedtestCtrl.get)

module.exports = router
