const express = require('express')
const speedtest = require('./speedtest')
const router = require('./api/router')

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/v1/speedtest', router)

/* app.get('/api/mensagem', (req, res) => {
  res.send({ msg: 'Hello From Express' });
});

app.get('/api/v1/speedtest', (req, res) => {
  const test_result = speedtest()
  res.send(test_result)
})*/

app.listen(port, () => console.log(`Listening on port ${port}`));