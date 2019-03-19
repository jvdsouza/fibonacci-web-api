const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const fibonacci = require('./controllers/fibonacci');

const app = express();
const port = process.env.port;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname + '/pages/index.html'))
});

app.post('/fibonacci', (req, resp) => {fibonacci.fibonacciCall(req, resp)})

app.listen(port, () => {
    console.log('app is running on ' + port);
})