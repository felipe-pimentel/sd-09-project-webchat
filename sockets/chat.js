const moment = require('moment'); 
const { getAllMsgs, addMsg } = require('../models/messages');

const connectedUsers = {};

const webchat = (io) => {
  io.on('connection', async (socket) => {
    socket.emit('showAllMsgs', await getAllMsgs());
    connectedUsers[socket.id] = socket.id.substring(0, 16);
    io.emit('listUsers', Object.values(connectedUsers));

    socket.on('message', async ({ chatMessage: message, nickname }) => {
      const timestamp = moment().format('DD-MM-yyyy HH:mm:ss A');
      await addMsg({ message, nickname, timestamp });
      io.emit('message', `${timestamp} - ${nickname}: ${message}`);
    });

    socket.on('nicknameChange', (newNickname) => {
      connectedUsers[socket.id] = newNickname;
      io.emit('listUsers', Object.values(connectedUsers));
    });

    socket.on('disconnect', () => {
      delete connectedUsers[socket.id];
      io.emit('listUsers', Object.values(connectedUsers));
    });
  });
};

module.exports = webchat;