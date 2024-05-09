import styles from './StatusA.module.css'

const StatusA = ({ statusA }) => {
  return (
    <>
      {statusA === "Activo" && <div className={styles.active}>{statusA}</div>}
      {statusA === "Cancelado" && <div className={styles.cancelled}>{statusA}</div>}
      {statusA === "Atendido" && <div className={styles.attended}>{statusA}</div>}
    </>
  )
}

export default StatusA;