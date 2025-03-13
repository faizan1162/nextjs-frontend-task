// src/services/taskService.ts
import API from 'config/api';
export const fetchTasks = async () => {
    try {
        const response = await API.get('tasks');
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks", error);
        throw error;
    }
};

export const createTask = async (title: string, description?: string) => {
    try {
        const response = await API.post('tasks', { title, description });
        return response.data;
    } catch (error) {
        console.error("Error creating task", error);
        throw error;
    }
};

export const deleteTask = async (id: number) => {
    try {
        const response = await API.delete(`tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting task", error);
        throw error;
    }
};
