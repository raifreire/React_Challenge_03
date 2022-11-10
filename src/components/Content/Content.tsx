import styles from './Content.module.css'

export function Content() {

    return (
        <div>
            <section className={styles.section}>
                <input type="text" placeholder='Adicione uma nova tarefa' />
            </section>
        </div>

    );
}