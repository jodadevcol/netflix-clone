import styles from "./styles.module.css"

function Section({ children }) {
  return (
    <div className={styles.isSectionCard}>
      {
        children
      }
    </div>
  )
}

export default Section

