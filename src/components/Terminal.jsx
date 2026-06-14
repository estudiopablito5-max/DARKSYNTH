import React from 'react';
import { Trash2, Copy } from 'lucide-react';
import { useStore } from '../store';
import './Terminal.css';

function Terminal() {
  const { terminalOutput, clearTerminal, addTerminalOutput } = useStore();

  const handleRunCommand = () => {
    addTerminalOutput({
      id: Date.now(),
      command: 'npm start',
      output: 'Starting development server...\nServer running at http://localhost:3000',
      timestamp: new Date(),
    });
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <h3>Terminal</h3>
        <div className="terminal-actions">
          <button className="term-btn" onClick={handleRunCommand} title="Run">
            ▶ Run
          </button>
          <button className="term-btn" onClick={clearTerminal} title="Clear">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <div className="terminal-output">
        {terminalOutput.length === 0 ? (
          <p className="term-empty">$ Ready to run commands...</p>
        ) : (
          terminalOutput.map((item) => (
            <div key={item.id} className="term-item">
              <p className="term-command">$ {item.command}</p>
              <p className="term-result">{item.output}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Terminal;
