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

            <div className={styles.taskList}>
                <div className={styles.taskInfo}>
                    <span className={styles.taskInfoCreated}>Tarefas criadas</span>
                    <span className={styles.taskInfoCompleted}>Concluídas</span>
                </div>

                <div className={styles.taskClipboardIcon}>
                    <img src={clipboardIcon} alt="" />
                </div>

                <div className={styles.taskMessage}>
                    <span>
                        <strong>
                            Você ainda não tem tarefas cadastradas
                        </strong><br />
                        Crie tarefas e organize seus itens a fazer
                    </span>
                </div>
            </div>
        </div>
    );
}