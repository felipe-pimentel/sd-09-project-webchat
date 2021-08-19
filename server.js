const express = require('express');

const app = express();
const path = require('path');
const { format } = require('date-fns');
const bodyParser = require('body-parser');

const timestamp = format(new Date(), 'dd-MM-yyyy HH:mm:ss');

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

const db = require('./models/chat');
const controller = require('./controllers/chat');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/chat.html'));
});

app.use(express.static('public'));

io.on('connection', async (socket) => {
  socket.on('message', async ({ nickname, chatMessage }) => {
    io.emit('message', `${timestamp} - ${nickname}: ${chatMessage}`);
    await db.saveMessage({ chatMessage, nickname, timestamp });
  });
});

app.get('/history', controller.getHistory);

http.listen(3000, () => {
  console.log('listening on *:3000');
});