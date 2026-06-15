import { create } from 'zustand';

const useStore = create((set) => ({
  projects: [
    {
      id: '1',
      name: 'My First App',
      description: 'AI-powered project',
      files: [],
      createdAt: new Date().toISOString(),
    },
  ],
  currentProject: '1',
  setCurrentProject: (id) => set({ currentProject: id }),
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, { ...project, id: Date.now().toString() }],
    })),
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  clearMessages: () => set({ messages: [] }),
  editorContent: '',
  setEditorContent: (content) => set({ editorContent: content }),
  terminalOutput: [],
  addTerminalOutput: (output) =>
    set((state) => ({
      terminalOutput: [...state.terminalOutput, output],
    })),
  clearTerminal: () => set({ terminalOutput: [] }),
}));

export { useStore };
