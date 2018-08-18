const http = require('http');
const cors = require('cors');
const io = require('socket.io');

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const server = http.createServer(app);
const socketIo = io(server);

// Allows CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

socketIo.on('connection', socket => {
  const username = socket.handshake.query.username;
  console.log(`${username} connected`);

  socket.on('client:message', data => {
    console.log(`${data.username}: ${data.message}`);

    socket.broadcast.emit('server:message', data);
  });

  socket.on('disconnect', () => {
    console.log(`${username} disconnected`);
  });
});
