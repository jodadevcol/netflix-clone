/* Styles & Sources */
import { Logo } from "../Icons/Logo"
import styles from "./styles.module.css"

function Header() {
  return (
    <div className={styles.isHeaderWrapper}>
      <div className={styles.isHeader}>

        <span className={styles.isSvgLogo}>
          <Logo
            width="auto"
            height="1.5rem"
            fill="#e50914"
          />
        </span>

        <a
          className={styles.isBtnLogin}
          href="/"
        >
          Iniciar sesión
        </a>

      </div>
    </div>
  )
}

export default Header