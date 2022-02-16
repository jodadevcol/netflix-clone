/* Components */
import { ButtonPrimary } from "@components/Buttons"
/* Icons */
import { ArrowRight } from "@icons/ArrowRight"
/* Styles & Sources */
import Card from "@components/Card"
import styles from "./styles.module.css"

const faqQuestions = [
  {
    id: "8b0a35c9",
    question: "¿Qué es Netflix?",
    answer:
      "Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet. <br/> <br/> Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!",
  },
  {
    id: "8b0a45d8",
    question: "¿Cuánto cuesta Netflix?",
    answer:
      "Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $&nbsp;16.900 hasta $&nbsp;38.900 al mes. Sin costos adicionales ni contratos.",
  },
  {
    id: "8b0a23hg",
    question: "¿Dónde puedo ver Netflix?",
    answer:
      "Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart&nbsp;TV, smartphones, tablets, reproductores multimedia y consolas de juegos.<br><br>Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows&nbsp;10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.",
  },
  {
    id: "8b0a364y",
    question: "¿Cómo cancelo?",
    answer:
      "Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.",
  },
  {
    id: "8b0g929u",
    question: "¿Qué puedo ver en Netflix?",
    answer:
      "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.",
  },
  {
    id: "8b0m8i4n",
    question: "¿Es bueno Netflix para los niños?",
    answer:
      "La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.<br><br>Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.",
  },
]

function SectionFaq() {
  return (
    <>
      <div className={styles.isCardText}>
        <h2 className={styles.isTextTitle}>Preguntas frecuentes</h2>

        <ul className={styles.isTextListFAQ}>
          {faqQuestions.map(({ id, question, answer }) => (
            <Card key={id} id={id} question={question} answer={answer} />
          ))}
        </ul>
      </div>
      <form className={`${styles.isForm} ${styles.isFormFQA}`} action="/">
        <h3 className={styles.isFormTitle}>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
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
              icon={<ArrowRight className={styles.isIconBtn} fill="#fff" />}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default SectionFaq
