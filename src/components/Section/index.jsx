import styles from "./styles.module.css"

function Section({ children, className }) {
  return (
    <div className={`${styles.isSectionCard} ${className}`}>{children}</div>
  )
}

export default Section
