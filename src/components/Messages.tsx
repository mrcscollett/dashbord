import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './Messages.scss';

interface Message {
  name: string;
  content: string;
}

const Messages: React.FC = () => {
  
  const [messages, setMessages] = useState<Message[]>([
    { name: 'John Doe', content: 'This is the first test message.' },
    { name: 'Jane Smith', content: 'Here’s another example message for testing.' },
    { name: 'CyberSec Admin', content: 'Remember to review the latest security logs.' }
  ]);

  const [inputName, setInputName] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const handleAddMessage = () => {
    if (inputName && inputMessage) {
      const newMessage: Message = { name: inputName, content: inputMessage };
      setMessages([...messages, newMessage]);
      setInputName('');
      setInputMessage('');
    }
  };

  return (
    <Box className="messages" sx={{ backgroundColor: 'background.paper' }}>
      <Typography variant="h6" color="textPrimary">Messages</Typography>

      { }
      <TextField
        label="Your Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: '#424242', borderRadius: '5px', marginBottom: '10px' }}
      />
      <TextField
        label="Write a message"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: '#424242', borderRadius: '5px' }}
      />
      <Button onClick={handleAddMessage} variant="contained" sx={{ marginTop: '10px' }}>
        Send
      </Button>

      {/* Displaying messages */}
      <Box className="message-list" sx={{ marginTop: '16px', maxHeight: '200px', overflowY: 'auto', padding: '8px', backgroundColor: '#424242' }}>
        {messages.map((msg, index) => (
          <Box key={index} sx={{ marginBottom: '12px' }}>
            <Typography variant="body1" color="textSecondary"><strong>{msg.name}</strong>:</Typography>
            <Typography variant="body2" color="textSecondary">{msg.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Messages;

