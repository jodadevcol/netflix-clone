/* Styles & Sources */
import styles from "./styles.module.css"
import ImgMobile from "@images/mobile-0819.jpg"
import ImgBoxShot from "@images/boxshot.png"

function SectionDownloadWatch() {
  return (
    <>
      <div className={styles.isCardText}>
        <h2 className={styles.isTextTitle}>
          Descarga tus series para verlas offline.
        </h2>
        <h3 className={styles.isTextSubtitle}>
          Guarda tu contenido favorito y tendrás siempre algo para ver.
        </h3>
      </div>
      <div className={styles.isCardImg}>
        <div className={styles.isImgAnimation}>
          <img className={styles.isAnimationImg} src={ImgMobile} alt="Stranger Things Mobile" />
          <div className={styles.isAnimationDownload}>
            <div className={styles.isDownloadAnimationImg}>
              <img className={styles.isImgInAnimation} src={ImgBoxShot} alt="" />
            </div>
            <div className={styles.isDownloadAnimationText}>
              <div className={styles.isTextAnimation0}>
                Stranger Things
              </div>
              <div className={styles.isTextAnimation1}>
                Descargando...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionDownloadWatch