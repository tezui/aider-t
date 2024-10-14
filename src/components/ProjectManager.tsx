import React from 'react';
import { useProject } from '../contexts/ProjectContext';

const ProjectManager: React.FC = () => {
  const { projects, createProject, deleteProject } = useProject();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Project Manager</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            <button
              onClick={() => deleteProject(project.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => createProject('New Project', 'A new project description')}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create New Project
      </button>
    </div>
  );
};

export default ProjectManager;