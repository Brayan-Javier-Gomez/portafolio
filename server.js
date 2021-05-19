const express = require('express');
const path = require('path');
const app = express();

require('./config.js')

app.use(express.static(__dirname + '/dist/portafolio'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/portafolio/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`server listening in port ${process.env.PORT}`);
})