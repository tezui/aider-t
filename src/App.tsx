import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectWorkspace from './components/ProjectWorkspace';
import ProjectManager from './components/ProjectManager';
import Settings from './components/Settings';
import { ProjectProvider } from './contexts/ProjectContext';

function App() {
  return (
    <Router>
      <ProjectProvider>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <Routes>
                <Route path="/" element={<ProjectWorkspace />} />
                <Route path="/projects" element={<ProjectManager />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </ProjectProvider>
    </Router>
  );
}

export default App;