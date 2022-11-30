import styles from './Task.module.css';
import trash from '../../assets/Trash.svg';
import { ITask } from '../../App'
import checkedIcon from '../../assets/Checked.svg'
import checkIcon from '../../assets/check.svg'


interface taskProps {
    task: ITask;
    onDeleteTask: (taskId: string) => void;
    onComplited: (taskId: string) => void;
}
export function Task({ task, onDeleteTask, onComplited }: taskProps) {

    return (

        <div className={styles.taskContent}>

            <button className={styles.buttonCheck} onClick={() => onComplited(task.id)}>
                {task.isComplited ? <img src={checkedIcon} alt="image no complited" /> : <img src={checkIcon} alt="image complited" />}
            </button>

            <p className={task.isComplited ? styles.textComplited : ''}>{task.title}</p>

            <button onClick={() => onDeleteTask(task.id)}>
                <img src={trash} alt="image trash" />
            </button>

        </div>

    );
}
