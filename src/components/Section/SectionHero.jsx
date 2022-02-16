/* Components */
import { ButtonPrimary } from "@components/Buttons"
/* Icons */
import { ArrowRight } from "@icons/ArrowRight"
/* Styles & Sources */
import styles from "./styles.module.css"
import ImgHomeWrapper from "@images/home-wrapper.jpg"

function SectionHero() {
  return (
    <>
      <div className={styles.isCardBackground}>
        <figure className={styles.isBackgroundFigure}>
          <img className={styles.isFigureImg} src={ImgHomeWrapper} alt="Peliculas y series ilimatadas y mucho más." />
        </figure>
        <div className={styles.isBackgroundGradient}></div>
      </div>
      <div className={styles.isCardText}>
        <h1 className={styles.isTextTitle}>
          Películas y series ilimitadas y mucho más.
        </h1>
        <h2 className={styles.isTextSubtitle}>
          Disfruta donde quieras. Cancela cuando quieras.
        </h2>
        <form className={styles.isForm} action="/">
          <h3 className={styles.isFormTitle}>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
          </h3>
          <div className={styles.isFormLockup}>
            <div className={styles.isLockupContainerPlacement}>
              <label placeholder="email">
                <input
                  className={styles.isPlacementInput}
                  type="email"
                  name="email"
                  id="id_email"
                  autoComplete="email"
                />
                <label
                  className={`
                    ${styles.isPlacementLabel}
                    ${styles.isPlacementPlaceholder}
                  `}
                  htmlFor="id_email"
                >
                  Email
                </label>
              </label>
            </div>
            <div className={styles.isLockupBox}>
              <ButtonPrimary
                text="Comenzar"
                isIcon={true}
                icon={<ArrowRight
                  className={styles.isIconBtn}
                  fill="#fff"
                />}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SectionHero