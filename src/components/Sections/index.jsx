/* Components */
import Section from "@components/Section"
import SectionHero from "@components/Section/SectionHero"
import SectionWatchOn from "@components/Section/SectionWatchOn"
import SectionDownloadWatch from "@components/Section/SectionDownloadWatch"
import SectionWatchDevice from "@components/Section/SectionWatchDevice"
import SectionProfileKids from "@components/Section/SectionProfileKids"
/* Styles & Sources */
import "./styles.css"

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
    </div>
  )
}

export default Sections