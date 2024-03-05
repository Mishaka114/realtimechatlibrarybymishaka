```markdown
# Real-Time Chat Library

A simple JavaScript library for managing real-time chat applications.

## Installation

You can install the Real-Time Chat Library via npm:

```bash
npm install real-time-chat-library
```

## Usage

```javascript
const RealTimeChat = require('real-time-chat-library');

// Create a new instance of the chat library
const chat = new RealTimeChat();

// Add users to the chat
chat.addUser('user1', 'Alice');
chat.addUser('user2', 'Bob');

// Add messages to the chat
chat.addMessage('user1', 'Hello, Bob!');
chat.addMessage('user2', 'Hi, Alice!');

// Get the list of users
const users = chat.getUsers();
console.log('Users:', users);

// Get the list of messages
const messages = chat.getMessages();
console.log('Messages:', messages);
```

## API

### `addUser(userId, username)`

Add a user to the chat.

- `userId` (string): The unique identifier of the user.
- `username` (string): The username of the user.

Returns `true` if the user was added successfully, `false` if the user already exists.

### `removeUser(userId)`

Remove a user from the chat.

- `userId` (string): The unique identifier of the user.

Returns `true` if the user was removed successfully, `false` if the user does not exist.

### `getUsers()`

Get the list of users in the chat.

Returns an array of usernames.

### `addMessage(userId, message)`

Add a message to the chat.

- `userId` (string): The unique identifier of the user sending the message.
- `message` (string): The content of the message.

### `getMessages()`

Get the list of messages in the chat.

Returns an array of message objects, each containing `userId`, `message`, and `timestamp` properties.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Make sure to replace the placeholder text with actual information about your library before publishing it on npm.