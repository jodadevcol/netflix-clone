/* Styles & Sources */
import styles from "./styles.module.css"
import ImgDevice from "@images/device-pile.png"
import VideoDevice from "@videos/video-devices.m4v"


function SectionWatchDevice() {
  return (
    <>
      <div className={styles.isCardText}>
        <h2 className={styles.isTextTitle}>
          Disfruta donde quieras.
        </h2>
        <h3 className={styles.isTextSubtitle}>
          Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra.
        </h3>
      </div>
      <div className={styles.isCardImg}>
        <div className={styles.isImgAnimation}>
          <img className={styles.isAnimationImg} src={ImgDevice} alt="" />
          <div className={`
            ${styles.isImgVideoAnimation}
            ${styles.isVideoWatchDevice}
          `}>
            <video className={styles.isAnimationInVideo} autoPlay playsInline muted loop>
              <source src={VideoDevice} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWatchDevice