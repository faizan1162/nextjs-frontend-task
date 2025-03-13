"use client";
import { useState, useEffect } from 'react';
import { fetchTasks, createTask, deleteTask } from 'services/taskService';
import { Task } from 'types/task';
import { showSuccess, showError } from "utils/helper";

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        async function getTasks() {
            try {
                const response = await fetchTasks();
                setTasks(response.data || []); // Ensure data is an array
            } catch (error) {
                console.error('Error fetching tasks:', error);
                showError(`Error fetching tasks: ${error}`);
            } finally {
                setLoading(false);
            }
        }
        getTasks();
    }, []);

    const createNewTask = async (title: string, description?: string) => {
        try {
            const result = await createTask(title, description);
            if(result.data){
                const newTask = result.data || null;
                setTasks((prevTasks) => [...prevTasks, newTask]);
                showSuccess(`Task created successfully!`);
            }
        } catch (error) {
            console.error('Error creating task:', error);
            showError(`Error creating tasks: ${error}`);
        }
    };

    const removeTask = async (id: number) => {
        try {
            await deleteTask(id);
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
            showSuccess(`Task deleted successfully!`);
        } catch (error) {
            showError(`Error deleting tasks: ${error}`);
            console.error('Error deleting task:', error);
        }
    };

    return {
        tasks,
        loading,
        createTask: createNewTask,
        deleteTask: removeTask,
    };
};

export default useTasks;
