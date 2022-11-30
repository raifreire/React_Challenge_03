import styles from './Tasks.module.css';
import { Task } from '../Task/Task';
import { ITask } from '../../App';
import { ChangeEvent, FormEvent, useState } from 'react';
import ClipBoard from '../../assets/Clipboard.svg'

interface tasksProps {
    tasks: ITask[];
    onAddTask: (taskTitle: string) => void;
    onDeleteTask: (taskId: string) => void;
    onComplited: (taskId: string) => void
}


export function Tasks({ tasks, onAddTask, onDeleteTask, onComplited }: tasksProps) {

    const [newTaskText, setNewtaskText] = useState('');

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isComplited).length;

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        onAddTask(newTaskText)

        setNewtaskText('')

    }

    function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
        setNewtaskText(event.target.value)

    }

    return (
        <>
            <section>
                <header>

                    <form onSubmit={handleCreateNewTask} className={styles.formNewtask}>

                        <input
                            placeholder='adicione uma nova tarefa'
                            onChange={handleNewTaskText}
                            value={newTaskText}
                        />

                        <button type='submit'>Criar</button>
                    </form>

                    <div className={styles.tasks}>
                        <div className={styles.info}>
                            <p>Todos Criados {tasksQuantity}</p>
                            <p>{`${completedTasks} concluidas  de ${tasksQuantity}`}</p>
                        </div>

                        <div className={styles.containerTask}>
                            {tasks.map((task => <Task
                                key={task.id}
                                task={task}
                                onDeleteTask={onDeleteTask}
                                onComplited={onComplited}
                            />))}

                            {tasks.length <= 0 && (
                                <div className={styles.empty}>
                                    <img src={ClipBoard} alt="clipboard empty" />
                                    <strong>voce ainda não tem tarefas cadastradas</strong>
                                    <p>crie tarefas e organize os itens à fazer</p>
                                </div>

                            )}
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}