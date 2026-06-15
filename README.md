# 🚀 Antigravity - AI Development Platform

A web-based implementation of **Google Antigravity**, an AI-powered agentic development platform that helps you build, test, and deploy code directly from your browser.

## ✨ Features

- 💬 **AI Chat Agent** - Describe what you want to build
- 📝 **Code Editor** - Write and edit code in multiple languages
- 🖥️ **Terminal Emulator** - Run commands and see output
- 📱 **Mobile-First Design** - Works perfectly on phones and tablets
- 🎨 **Modern Dark UI** - Eye-friendly interface
- ⚡ **PWA Ready** - Install as an app on your device
- 🔌 **No Backend Required** - Client-side AI using Gemini API

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with CSS Variables
- **State Management**: Zustand
- **UI Icons**: Lucide React
- **AI**: Google Gemini API (optional)
- **Hosting**: Netlify / GitHub Pages / Vercel

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/estudiopablito5-max/DARKSYNTH.git
   cd DARKSYNTH
   git checkout antigravity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your Gemini API key to `.env.local`

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

## 🚀 Deployment

### Deploy to Netlify

```bash
npm run build
npm run deploy
```

Or connect your GitHub repo to Netlify for automatic deployments.

### Deploy to GitHub Pages

```bash
npm run build
git add dist/
git commit -m "Build for production"
git push origin antigravity
```

## 📱 Use on Mobile

1. Open the deployed URL on your mobile device
2. Tap "Add to Home Screen" (iOS) or "Install App" (Android)
3. Open as a standalone app

## 🔑 Setting Up Gemini API

1. Go to [Google AI Studio](https://aistudio.google.com)
2. Create a new API key
3. Add it to your `.env.local` file:
   ```
   VITE_GEMINI_API_KEY=sk_xxxxxxxxxxxx
   ```

## 📖 Usage

1. **Create a Project** - Click the + button in the sidebar
2. **Chat with AI** - Describe what you want to build
3. **Edit Code** - Write code in the editor
4. **Run Code** - Click "Run" in the terminal
5. **Download** - Export your code

## 🎮 Keyboard Shortcuts

- `Ctrl/Cmd + S` - Save code
- `Ctrl/Cmd + K` - Focus chat input
- `Enter` - Send chat message
- `Ctrl/Cmd + Shift + C` - Clear terminal

## 📝 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx       # Top navigation
│   ├── Sidebar.jsx      # Project navigation
│   ├── Editor.jsx       # Code editor
│   ├── Chat.jsx         # AI chat interface
│   └── Terminal.jsx     # Terminal output
├── store.js             # Zustand state management
├── App.jsx              # Main app component
└── index.css            # Global styles
```

## 🔗 API Integration

The app uses **Google Gemini API** for AI functionality. To enable:

1. Get your API key from [Google AI Studio](https://aistudio.google.com)
2. Add to `.env.local`
3. The app will automatically use it for code generation and chat

## 🐛 Troubleshooting

### "API key not found"
- Check `.env.local` has `VITE_GEMINI_API_KEY`
- Restart dev server after updating .env

### Port 3000 already in use
- Change port in `vite.config.js`
- Or run: `lsof -ti:3000 | xargs kill -9`

### Mobile app not installing
- Ensure site uses HTTPS (required for PWA)
- Check browser supports PWA (latest Chrome, Firefox, Safari)

## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 15+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 🤝 Contributing

Pull requests welcome! For major changes, open an issue first.

## 📞 Support

- 🐛 [Report bugs](https://github.com/estudiopablito5-max/DARKSYNTH/issues)
- 💬 [Discussions](https://github.com/estudiopablito5-max/DARKSYNTH/discussions)
- 📧 Email: your.email@example.com

## 🏗️ Roadmap

- [ ] Gemini AI integration for code generation
- [ ] File system simulation
- [ ] Code syntax highlighting
- [ ] Multi-file projects
- [ ] Export to GitHub
- [ ] Real-time collaboration
- [ ] Voice commands
- [ ] Plugin system

---

**Built with ❤️ for developers**
