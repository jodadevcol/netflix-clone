/* Components */
import Section from "@components/Section"
import SectionHero from "@components/Section/SectionHero"
import SectionWatchOn from "@components/Section/SectionWatchOn"
import SectionDownloadWatch from "@components/Section/SectionDownloadWatch"
import SectionWatchDevice from "@components/Section/SectionWatchDevice"
import SectionProfileKids from "@components/Section/SectionProfileKids"
import SectionFaq from "@components/Section/SectionFaq"
/* Styles & Sources */
import styles from "./styles.module.css"

function Sections() {
  return (
    <div className="is-section-cards">
      <Section>
        <SectionHero />
      </Section>

      <Section>
        <SectionWatchOn />
      </Section>

      <Section>
        <SectionDownloadWatch />
      </Section>

      <Section>
        <SectionWatchDevice />
      </Section>

      <Section>
        <SectionProfileKids />
      </Section>

      <Section className={styles.isSectionFQA}>
        <SectionFaq />
      </Section>
    </div>
  )
}

export default Sections
