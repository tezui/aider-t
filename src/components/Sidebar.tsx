import React from 'react';
import { Link } from 'react-router-dom';
import { FolderTree, Play, Upload } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FolderTree className="inline-block mr-2" size={20} />
          Project Files
        </Link>
        <Link to="/preview" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <Play className="inline-block mr-2" size={20} />
          Live Preview
        </Link>
        <Link to="/deploy" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <Upload className="inline-block mr-2" size={20} />
          Deploy
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;