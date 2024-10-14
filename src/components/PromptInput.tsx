import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useProject } from '../contexts/ProjectContext';

const PromptInput: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const { processPrompt } = useProject();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      processPrompt(prompt);
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4 bg-white">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
        className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default PromptInput;