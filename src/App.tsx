import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task';

import './global.css'

export function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <div className={styles.wrapper}>
        <Task />
      </div>
    </div>
  );
}
