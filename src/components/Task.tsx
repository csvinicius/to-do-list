import { PlusCircle } from 'phosphor-react'

import clipboardIcon from '../assets/clipboard-icon.png'
import styles from './Task.module.css'

export function Task() {
    return (
        <div>
            <form className={styles.taskForm}>
                <input className={styles.taskBox} type="text" placeholder="Adicione uma nova tarefa" />
                <button className={styles.taskCreate}>
                    Criar
                    <div className={styles.taskCreateIcon}>
                        <PlusCircle size={18} />
                    </div>
                </button>
            </form>

            {/* <div className={styles.}>
                <h1>XDDDDDD</h1>
                <img src={clipboardIcon} alt="" />
            </div> */}
        </div>
    );
}