"use client";
import TaskForm from "components/TaskForm";
import TaskList from "components/TaskList";
import useTasks from "hooks/useTasks";

const Tasks = () => {
    const { tasks, loading, createTask, deleteTask } = useTasks();

    if (loading)
        return <div className="text-center text-xl font-semibold text-gray-600">Loading...</div>;

    return (
        <div className="max-w-8xl mx-auto p-6">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <TaskForm onSubmit={createTask}/>
                </div>
                <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Total Tasks ({tasks.length})</h2>
                    {tasks.length > 0 ? (
                        <TaskList tasks={tasks} onDelete={deleteTask}/>
                    ) : (
                        <p className="text-center text-gray-500">No tasks available. Add a new task above!</p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Tasks;
