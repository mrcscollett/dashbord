// src/components/Messages.tsx
import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';

interface Message {
  name: string;
  content: string;
}

const Messages: React.FC = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    { name: 'John Doe', content: 'This is the first test message.' },
    { name: 'Jane Smith', content: 'Here’s another example message for testing.' },
  ]);
  const [inputName, setInputName] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const handleAddMessage = () => {
    if (inputName && inputMessage) {
      setMessages([...messages, { name: inputName, content: inputMessage }]);
      setInputName('');
      setInputMessage('');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        padding: '16px',
        borderRadius: '8px',
        color: 'text.primary',
      }}
    >
      <Typography variant="h6">Messages</Typography>
      <TextField
        label="Your Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: 'background.default', borderRadius: '5px', marginBottom: '10px' }}
      />
      <TextField
        label="Write a message"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: 'background.default', borderRadius: '5px' }}
      />
      <Button onClick={handleAddMessage} variant="contained" sx={{ marginTop: '10px' }}>
        Send
      </Button>
      <Box
        sx={{
          marginTop: '16px',
          maxHeight: '200px',
          overflowY: 'auto',
          padding: '8px',
          backgroundColor: 'background.default',
          borderRadius: '4px',
        }}
      >
        {messages.map((msg, index) => (
          <Box key={index} sx={{ marginBottom: '12px' }}>
            <Typography variant="body1">
              <strong style={{ color: theme.palette.primary.main }}>{msg.name}</strong>:
            </Typography>
            <Typography variant="body2">{msg.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Messages;

