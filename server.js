const http = require('http');
const app = require('./app');
const port = process.env.port || 3000;
var server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is now up ${port} `);
});

const io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.on('heart', function (data) {
        console.log(JSON.stringify(data));
        socket.broadcast.emit('broadcast', { enabled: true });
    });
});