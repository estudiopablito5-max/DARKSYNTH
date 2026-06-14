import React from 'react';
import { Plus, FolderOpen, Settings } from 'lucide-react';
import { useStore } from '../store';
import './Sidebar.css';

function Sidebar() {
  const { projects, currentProject, setCurrentProject, addProject } = useStore();

  const handleNewProject = () => {
    const projectName = prompt('Project name:');
    if (projectName) {
      addProject({
        name: projectName,
        description: 'New AI project',
        files: [],
      });
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Projects</h2>
        <button className="new-project-btn" onClick={handleNewProject} title="New Project">
          <Plus size={18} />
        </button>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-item ${currentProject === project.id ? 'active' : ''}`}
            onClick={() => setCurrentProject(project.id)}
          >
            <FolderOpen size={18} />
            <div className="project-info">
              <p className="project-name">{project.name}</p>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <button className="sidebar-btn">
          <Settings size={18} />
          Settings
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
