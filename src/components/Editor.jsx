import React, { useState } from 'react';
import { Save, Copy, Download } from 'lucide-react';
import { useStore } from '../store';
import './Editor.css';

function Editor() {
  const { editorContent, setEditorContent } = useStore();
  const [language, setLanguage] = useState('javascript');

  const handleSave = () => {
    alert('Code saved!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editorContent);
    alert('Copied to clipboard!');
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(editorContent));
    element.setAttribute('download', `code.${language === 'javascript' ? 'js' : language}`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="editor">
      <div className="editor-toolbar">
        <div className="toolbar-left">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="typescript">TypeScript</option>
            <option value="jsx">JSX</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
        </div>
        <div className="toolbar-right">
          <button className="editor-btn" onClick={handleCopy} title="Copy">
            <Copy size={18} />
          </button>
          <button className="editor-btn" onClick={handleDownload} title="Download">
            <Download size={18} />
          </button>
          <button className="editor-btn primary" onClick={handleSave} title="Save">
            <Save size={18} />
          </button>
        </div>
      </div>
      <textarea
        className="editor-textarea"
        value={editorContent}
        onChange={(e) => setEditorContent(e.target.value)}
        placeholder="// Your code here...\n\nfunction helloWorld() {\n  console.log('Hello from Antigravity!')\n}"
      />
    </div>
  );
}

export default Editor;
