import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.emptyList}>
      <img
        src="https://i.ibb.co/D8M2H86/clipboard.png"
        alt="Ícone de prancheta"
      />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
