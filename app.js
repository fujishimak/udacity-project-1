const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// app.use("/images", express.static(path.join(__dirname + '/images')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname +'/index.html')));
// app.get('/main.css', (req, res) => res.sendFile(path.join(__dirname+'/main.css')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));