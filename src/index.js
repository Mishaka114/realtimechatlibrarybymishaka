// chat-library.js

class RealTimeChat {
    constructor() {
      this.users = {};
      this.messages = [];
    }
  
    // Add a user to the chat
    addUser(userId, username) {
      if (!this.users[userId]) {
        this.users[userId] = username;
        return true;
      }
      return false;
    }
  
    // Remove a user from the chat
    removeUser(userId) {
      if (this.users[userId]) {
        delete this.users[userId];
        return true;
      }
      return false;
    }
  
    // Get the list of users in the chat
    getUsers() {
      return Object.values(this.users);
    }
  
    // Add a message to the chat
    addMessage(userId, message) {
      const timestamp = new Date().toISOString();
      this.messages.push({ userId, message, timestamp });
    }
  
    // Get the list of messages in the chat
    getMessages() {
      return this.messages;
    }
  }
  
  module.exports = RealTimeChat;