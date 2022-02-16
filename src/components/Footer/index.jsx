/* Styles & Sources */
import styles from "./styles.module.css"

function Footer() {
  return (
    <footer className={styles.isFooter}>
      <div className={styles.isFooterLinks}>
        <p className={styles.isText}>¿Preguntas? Llama al 01 800 917 1564</p>
        <ul className={styles.isLinksStructure}>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Preguntas frecuentes
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Centro de ayuda
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Cuenta
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Prensa
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Relaciones con inversionistas
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Empleo
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Canjear tarjetas de regalo
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Comprar tarjetas de regalo
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Fromas de ver
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Término de uso
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Privacidad
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Preferencias de cookies
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Información corporativa
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Contáctanos
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Prueba de velocidad
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Avisos legales
            </a>
          </li>
          <li className={styles.isItem}>
            <a className={styles.isItemLink} href="/">
              Solo en Netflix
            </a>
          </li>
        </ul>
        <div className={styles.isFooterCountry}>
          <p className={styles.isText}>Netflix Colombia</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
