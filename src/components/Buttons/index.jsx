/* Styles & Sources */
import styles from "./styles.module.css"

export const ButtonPrimary = ({ text = 'Button text', isIcon = false, icon = '' }) => {
  return (
    <button className={styles.isBtnPrimary}>
      <span className={styles.isBtnText}>{text}</span>
      {
        isIcon
          ? (
            <span className={styles.isBtnIcon}>
              {icon}
            </span>
          )
          : null
      }
    </button>
  )
}