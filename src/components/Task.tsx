import { PlusCircle, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';

import clipboardIcon from '../assets/clipboard-icon.png'
import styles from './Task.module.css'

export function Task() {
    const [tasks, setTasks] = useState<String[]>([]);
    const [newTaskText, setNewTaskText] = useState('');
    const [taskCreatedCount, setTaskCreatedCount] = useState(0);
    const [taskCompletedCount, setTaskCompletedCount] = useState(0);

    const isNewTaskListEmpty = tasks.length === 0;
    const isNewTaskTextEmpty = newTaskText.length === 0;

    let taskId = 0;

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
        handleCreatedTaskCount();
    }

    
    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }
    
    function handleCreatedTaskCount() {
        setTaskCreatedCount((state) => state + 1);
    }
    
    function handleDeleteTask(taskToDelete: any) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        }
        );
        
        setTasks(tasksWithoutDeletedOne);
        handleDeletedTaskCount();
    }
    
    function handleDeletedTaskCount() {
        setTaskCreatedCount((state) => state - 1);
    }
    

    return (
        <div className={styles.taskWrapper}>
            <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
                <textarea
                    className={styles.taskBox}
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                />
                <button className={styles.createTaskButton} type='submit' disabled={isNewTaskTextEmpty}>
                    Criar
                    <div className={styles.createTaskButtonIcon}>
                        <PlusCircle size={18} />
                    </div>
                </button>
            </form>

            <div className={styles.taskList}>
                <div className={styles.taskInfo}>
                    <div className={styles.taskInfoCreated}>
                        <span>Tarefas criadas</span>

                        <div className={styles.taskInfoCreatedCounter}>
                            <p>{taskCreatedCount}</p>
                        </div>
                    </div>
                    <div className={styles.taskInfoCompleted}>
                        <span>Concluídas</span>

                        <div className={styles.taskInfoCompletedCounter}>
                            <p>{taskCompletedCount} de {taskCreatedCount}</p>
                        </div>
                    </div>
                </div>


                {
                    isNewTaskListEmpty
                        ?
                        <div>
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
                        :
                        tasks.map(task => {
                            return (
                                <div className={styles.taskListCreated} key={taskId++}>
                                    <div className={styles.taskContent}>
                                        <input className={styles.taskCheckbox} type="checkbox" />
                                        <p>{task}</p>
                                    </div>
                                    <button onClick={() => handleDeleteTask(task)} className={styles.deleteTaskButton}>
                                        <Trash size={24} />
                                    </button>
                                </div>
                            );
                        })
                }


            </div>
        </div>
    );
}