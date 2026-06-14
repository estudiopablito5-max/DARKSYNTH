import React, { useState } from 'react';
import { Send, Mic, RefreshCw } from 'lucide-react';
import { useStore } from '../store';
import './Chat.css';

function Chat() {
  const { messages, addMessage, clearMessages } = useStore();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    addMessage({
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    });

    setIsLoading(true);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        role: 'assistant',
        content:
          'I understand! I\'m analyzing your request. This is a demo response. Connect a real Gemini API key to enable full functionality.',
        timestamp: new Date(),
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <h2>AI Agent</h2>
        <button className="clear-btn" onClick={clearMessages} title="Clear chat">
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="chat-empty">
            <div className="empty-icon">💬</div>
            <p>Start a conversation with the AI agent</p>
            <p className="empty-hint">Describe what you want to build...</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`message message-${msg.role}`}>
              <div className="message-avatar">{msg.role === 'user' ? '👤' : '🤖'}</div>
              <div className="message-content">
                <p>{msg.content}</p>
                <span className="message-time">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="message message-assistant">
            <div className="message-avatar">🤖</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="chat-input-area">
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your project..."
            className="chat-input"
          />
          <button className="input-btn" title="Voice input">
            <Mic size={18} />
          </button>
          <button
            className="input-btn primary"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            title="Send"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
