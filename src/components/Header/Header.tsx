import styles from './Header.module.css';
import logo from '../../assets/Logo.svg';

export function Header() {

    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <img src={logo} alt="logo" />
            </header>

            <div className={styles.newtask}>
                <input type="text" placeholder='adicione uma nova tarefa' />
                <button>Criar</button>
            </div>

            <div className={styles.tasks}>
                <div className={styles.info}>
                    <p>info</p>
                </div>

                <div className={styles.empty}>
                    <p>empty</p>
                </div>
            </div>

        </div>
    );
}
