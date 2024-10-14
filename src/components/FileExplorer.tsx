import React from 'react';
import { Folder, File } from 'lucide-react';
import { useProject } from '../contexts/ProjectContext';

const FileExplorer: React.FC = () => {
  const { files, setCurrentFile } = useProject();

  const renderTree = (files: any) => {
    return Object.entries(files).map(([name, file]: [string, any]) => (
      <div key={name} className="ml-4">
        {file.type === 'directory' ? (
          <div>
            <Folder className="inline-block mr-2" size={16} />
            <span>{name}</span>
            {renderTree(file.children)}
          </div>
        ) : (
          <div
            className="cursor-pointer hover:bg-gray-200 p-1 rounded"
            onClick={() => setCurrentFile(file)}
          >
            <File className="inline-block mr-2" size={16} />
            <span>{name}</span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-64 bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Project Files</h2>
      {renderTree(files)}
    </div>
  );
};

export default FileExplorer;