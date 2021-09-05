const express = require('express')
const router = express.Router()
const speedtest = require('../speedtest')

router.get('/', (req, res) => {
    const test_result = speedtest()
    res.send(test_result)
})

module.exports = router
