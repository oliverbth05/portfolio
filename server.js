const express = require('express');
const path = require('path');
const browser = require('browser-detect');

const app = express();


app.use(express.static(path.join(__dirname, 'static')))

app.get('/*', (req, res) => {
    if (browser(req.headers['user-agent']).name === 'ie') {
        res.sendFile(path.join(__dirname, 'ie.html'))
    }
    else {
        res.sendFile(path.join(__dirname, 'index.html'))
    }
    
})

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log('listening')
})