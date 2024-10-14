import React, { useState, useEffect } from 'react';
import FileExplorer from './FileExplorer';
import PromptInput from './PromptInput';
import { useProject } from '../contexts/ProjectContext';

const ProjectWorkspace: React.FC = () => {
  const { currentFile, updateFile } = useProject();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (currentFile) {
      setCode(currentFile.content);
    }
  }, [currentFile]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    if (currentFile) {
      updateFile(currentFile.path, newCode);
    }
  };

  return (
    <div className="flex h-full">
      <FileExplorer />
      <div className="flex-1 flex flex-col">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="flex-1 p-4 font-mono text-sm bg-gray-800 text-white"
          style={{ resize: 'none' }}
        />
        <PromptInput />
      </div>
    </div>
  );
};

export default ProjectWorkspace;