const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    console.log('recived')
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, process.env.IP, () => {
    console.log('listening')
})