import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { Task } from './components/Task/Task';
import { TaskEmpty } from '../src/components/contentTaskEmpty/TaskEmpty';
import { v4 as uuidv4 } from 'uuid';


import styles from './global.module.css';

export interface ITask {
    id: string;
    title: string;
    isComplited: boolean;
}

export function App() {

    const [tasks, setTasks] = useState<ITask[]>([

    ]);

    function addTask(taskTitle: string) {
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                isComplited: false,
            },
        ]);
    }

    function deleteTaskById(taskId: string) {
        const deleteTask = tasks.filter(task => task.id != taskId)

        setTasks(deleteTask)
    }

    function toggleTaskComplitedById(taskId: string) {
        const newTask = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isComplited: !task.isComplited,
                }
            }
            return task;
        });
        setTasks(newTask);
    }

    return (
        <div className={styles.container}>
            <Header />
            <Tasks tasks={tasks} onAddTask={addTask} onDeleteTask={deleteTaskById} onComplited={toggleTaskComplitedById} />

            {/* <TaskEmpty /> */}

        </div>
    )
}