import React, { useState, useEffect } from 'react';
import { getMessages } from '../services/api'; 
import './Messages.css'; 

function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getMessages();
        setMessages(Array.isArray(data) ? data : []);
      } catch (err) {
         console.error("Error fetching messages:", err);
         setError(`Failed to load messages. ${err.response?.data?.message || err.message || 'Please try again later.'}`);
         setMessages([]); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <main className="messages-page">
      <h1>Received Messages</h1>

      {isLoading && <p>Loading messages...</p>}

      {error && <p className="error-message">{error}</p>}

      {!isLoading && !error && messages.length === 0 && (
        <p>No messages have been submitted yet.</p>
      )}

      {!isLoading && !error && messages.length > 0 && (
        <div className="messages-list">
          {messages.map((msg, index) => (
            <div key={index} className="message-item">
              {}
              <h3>Subject: {msg.subject || 'No Subject'}</h3>
              <p><strong>From:</strong> {msg.name || 'Anonymous'}</p>
              <p className="message-text">{msg.message || 'No message content.'}</p>
              {}
              {}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Messages;