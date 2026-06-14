import React from 'react';
import { Menu, Settings, Github } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">⚛️</span>
          <h1>Antigravity</h1>
        </div>
      </div>
      <div className="header-right">
        <button className="icon-btn" title="Settings">
          <Settings size={20} />
        </button>
        <button className="icon-btn" title="GitHub">
          <Github size={20} />
        </button>
        <button className="menu-btn">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
