const express = require('express')
const speedtestRouter = require('./api/router/speedtest-router')

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/v1/speedtest', speedtestRouter)

app.get('/api/v1/mensagem', (req, res) => {
    res.send({"msg": "front-end ok"}).json
})

app.listen(port, () => console.log(`Listening on port ${port}`));