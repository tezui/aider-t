import React from 'react';
import { useProject } from '../contexts/ProjectContext';

const Settings: React.FC = () => {
  const { settings, updateSettings } = useProject();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Theme</label>
          <select
            value={settings.theme}
            onChange={(e) => updateSettings({ ...settings, theme: e.target.value })}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Font Size</label>
          <input
            type="number"
            value={settings.fontSize}
            onChange={(e) => updateSettings({ ...settings, fontSize: parseInt(e.target.value) })}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        {/* Add more settings as needed */}
      </div>
    </div>
  );
};

export default Settings;