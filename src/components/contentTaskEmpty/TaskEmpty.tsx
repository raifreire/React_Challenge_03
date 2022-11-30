import styles from '../contentTaskEmpty/TaskEmpty.module.css'

export function TaskEmpty() {
    return (
        <div className={styles.empty}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}