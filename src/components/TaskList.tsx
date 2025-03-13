import { Task } from "../types/task";
import { TrashIcon } from "@heroicons/react/24/solid";
import { formatDate } from '../utils/helper';
interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
}
const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
    return (
        <ul className="space-y-4">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="flex items-start justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                >
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                        <p className="text-gray-600">{task.description}</p>
                        <p className="text-sm text-gray-500">{formatDate(task.createdAt)}</p>
                    </div>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                    >
                        <TrashIcon className="w-5 h-5"/>
                    </button>
                </li>
            ))}
        </ul>
    );
};
export default TaskList;
