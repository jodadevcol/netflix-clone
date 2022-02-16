/* Styles & Sources */
import { Logo } from "../Icons/Logo"
import styles from "./styles.module.css"

function Header() {
  return (
    <div className={styles.isHeaderWrapper}>
      <div className={styles.isHeader}>

        <span className={styles.isSvgLogo}>
          <Logo
            className={styles.isIconSvg}
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