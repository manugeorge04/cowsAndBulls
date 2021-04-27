const express = require('express');
const path = require('path');

//require('./server/src/db/mongo');

//const apiRouter = require('./server/src/routes/api')

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json())

//app.use(apiRouter)

const publicPath = path.join(__dirname,'client','public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
});

app.listen(port, () => {
    console.log('server is up on', port)
})