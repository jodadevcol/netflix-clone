/* Styels & Sources */
import styles from "./styles.module.css"
import ImgTv from "@images/tv.png"
import VideoTv from "@videos/video-tv-0819.m4v"

function SectionWatchOn() {
  return (
    <>
      <div className={styles.isCardText}>
        <h2 className={styles.isTextTitle}>
          Disfruta en tu TV.
        </h2>
        <h3 className={styles.isTextSubtitle}>
          Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.
        </h3>
      </div>
      <div className={styles.isCardImg}>
        <div className={styles.isImgAnimation}>
          <img className={styles.isAnimationImg} src={ImgTv} alt="" />
          <div className={styles.isImgVideoAnimation}>
            <video className={styles.isAnimationInVideo} autoPlay playsInline muted loop>
              <source src={VideoTv} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWatchOn