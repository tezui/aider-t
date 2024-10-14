import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface File {
  path: string;
  content: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  files: File[];
}

interface Settings {
  theme: string;
  fontSize: number;
}

interface ProjectContextType {
  projects: Project[];
  currentProject: Project | null;
  currentFile: File | null;
  files: any;
  settings: Settings;
  createProject: (name: string, description: string) => void;
  deleteProject: (id: string) => void;
  setCurrentFile: (file: File) => void;
  updateFile: (path: string, content: string) => void;
  processPrompt: (prompt: string) => void;
  updateSettings: (newSettings: Settings) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [files, setFiles] = useState<any>({});
  const [settings, setSettings] = useState<Settings>({ theme: 'light', fontSize: 14 });

  const createProject = (name: string, description: string) => {
    const newProject: Project = {
      id: Date.now().toString(),
      name,
      description,
      files: [],
    };
    setProjects([...projects, newProject]);
    setCurrentProject(newProject);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
    if (currentProject?.id === id) {
      setCurrentProject(null);
    }
  };

  const updateFile = (path: string, content: string) => {
    if (currentProject) {
      const updatedFiles = currentProject.files.map((file) =>
        file.path === path ? { ...file, content } : file
      );
      setCurrentProject({ ...currentProject, files: updatedFiles });
    }
  };

  const processPrompt = async (prompt: string) => {
    try {
      // This is a placeholder for the actual API call to process the prompt
      const response = await axios.post('http://localhost:3000/api/process-prompt', { prompt });
      const { code, explanation } = response.data;

      // Update the current file with the generated code
      if (currentFile) {
        updateFile(currentFile.path, code);
      }

      // You might want to display the explanation to the user
      console.log('Explanation:', explanation);
    } catch (error) {
      console.error('Error processing prompt:', error);
    }
  };

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings);
  };

  const value = {
    projects,
    currentProject,
    currentFile,
    files,
    settings,
    createProject,
    deleteProject,
    setCurrentFile,
    updateFile,
    processPrompt,
    updateSettings,
  };

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};