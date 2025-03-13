"use client";
import { useState } from 'react';
interface TaskFormProps {
    onSubmit: (title: string, description?: string) => void;
}
const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSubmit(title, description);
        setTitle('');
        setDescription('');
    };
    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Add New Task</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700">Task Title</label>
                <input
                    type="text"
                    className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Task Description</label>
                <textarea
                    className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
                    placeholder="Enter task description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
