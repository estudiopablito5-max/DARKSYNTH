import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Chat from './components/Chat';
import Terminal from './components/Terminal';
import { useStore } from './store';
import './App.css';

function App() {
  const [layout, setLayout] = useState('split'); // 'split', 'editor', 'chat'
  const { projects, currentProject } = useStore();

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          {layout === 'split' && (
            <div className="split-view">
              <div className="editor-pane">
                <Editor />
              </div>
              <div className="chat-pane">
                <Chat />
              </div>
            </div>
          )}
          {layout === 'editor' && <Editor />}
          {layout === 'chat' && <Chat />}
          <Terminal />
        </div>
      </div>
      <div className="layout-switcher">
        <button
          className={layout === 'split' ? 'active' : ''}
          onClick={() => setLayout('split')}
          title="Split View"
        >
          ⊞
        </button>
        <button
          className={layout === 'editor' ? 'active' : ''}
          onClick={() => setLayout('editor')}
          title="Editor Only"
        >
          ≡
        </button>
        <button
          className={layout === 'chat' ? 'active' : ''}
          onClick={() => setLayout('chat')}
          title="Chat Only"
        >
          ≣
        </button>
      </div>
    </div>
  );
}

export default App;
