const express = require('express');
const http = require('http')
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

// Mapping objects to easily map sockets and users.
const clients = {};
const messages = {};
const users = {};

// Count of the users: index for the users
let userIndex = 0;

// This represents a unique chatroom.
// For this example purpose, there is only one chatroom;
const chatId = 1;

websocket.on('connection', (socket) => {
  // Initialise the sockets
  clients[socket.id] = socket; // in the 'database'
  // Subscribtions
  socket.on('userJoined', (userId) => onUserJoined(userId, socket));
  socket.on('message', (message) => onMessageReceived(message, socket));
});

// Event listeners.
// When a user joins the chatroom.
function onUserJoined(userId, socket) {
  try {
    // The userId is null for new users.
    if (!userId) {
      const user = {  
        id: getNewID()
      };
      socket.emit('userJoined', user.id);
      users[socket.id] = user.id;
    } else {
      users[socket.id] = userId;
    }
  } catch(err) {
    console.err(err);
  }
}

function getNewID() {
  userIndex = userIndex + 1;
  return userIndex;
}

// When a user sends a message in the chatroom.
function onMessageReceived(message, senderSocket) {
  const userId = users[senderSocket.id];
  // Safety check.
  if (!userId) return;

  _sendMessage(message, senderSocket);
}

// Save the message to the db and send all sockets but the sender.
function _sendMessage(message, socket, fromServer) {
  const messageData = {
    text: message.text,
    user: message.user,
    createdAt: new Date(message.createdAt),
    chatId: chatId
  };

  // Simple cache of the messages
  messages[messageData.createdAt] = messageData;
  // If the message is from the server, then send to everyone.
  const emitter = fromServer ? websocket : socket.broadcast;
  emitter.emit('message', [message]);
}

// Allow the server to participate in the chatroom through stdin.
const stdin = process.openStdin();
stdin.addListener('data', function(d) {
  _sendMessage(
    {
      text: d.toString().trim(),
      createdAt: new Date(),
      user: { id: 'robot' }
    }, 
    null /* no socket */, 
    true /* send from server */
  );
});
