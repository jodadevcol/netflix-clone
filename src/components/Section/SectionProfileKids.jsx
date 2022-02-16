/* Styles & Sources */
import styles from "./styles.module.css"
import ImgProfileKids from "@images/profile-kids.png"

function SectionProfileKids() {
  return (
    <>
      <div className={styles.isCardText}>
        <h2 className={styles.isTextTitle}>
          Crea perfiles para niños.
        </h2>
        <h3 className={styles.isTextSubtitle}>
          Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.
        </h3>
      </div>
      <div className={styles.isCardImg}>
        <div className={styles.isImgAnimation}>
          <img className={styles.isAnimationImg} src={ImgProfileKids} alt="" />
        </div>
      </div>
    </>
  )
}

export default SectionProfileKids