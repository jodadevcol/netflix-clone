import parce from "html-react-parser"
import { useState } from "react"
/* Icons */
import { Closed } from "@icons/Closed"
/* Styles & Sources */
import styles from "./styles.module.css"

function Card({ id, question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const onClickQuestion = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <li className={styles.isFAQItem} key={id}>
      <button onClick={onClickQuestion} className={styles.isItemQuestion}>
        {question}
        <Closed
          className={`
                    ${styles.isIconCard}
                    ${isOpen ? styles.isIconOpen : ""}
                  `}
        />
      </button>
      <div
        className={`
                    ${styles.isItemAnswer}
                    ${isOpen ? styles.isOpen : ""}
                  `}
      >
        <span className={styles.isAnswerSpan}>{parce(answer)}</span>
      </div>
    </li>
  )
}

export default Card
