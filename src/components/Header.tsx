import styles from './Header.module.css'

import toDoLogo from '../assets/todo-list.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logo" />
    </header>
  )
}
