const speedtest = require('../../model/speedtest')

class SpeedtestController {

    post = () => {

    }

    get = (req, res) => {
        const test_result = speedtest()
        res.send(test_result)
    }

    getAll = () => {

    }
}

module.exports = SpeedtestController