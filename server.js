const express = require('express');
const path = require('path');
//require('./server/src/db/mongo');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json())

//const apiRouter = require('./server/src/routes/api')
//app.use(apiRouter)

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io")
const io = new Server(server);
const rootSocket = require('./src/socket/rootSocket')(io);

global.gameStorage =  {};

const publicPath = path.join(__dirname,'client','public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
});

server.listen(port, () => {
    console.log('server is up on', port)
})