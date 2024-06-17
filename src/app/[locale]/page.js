import { useTranslations } from 'next-intl';
import styles from './styles.module.scss'
import Header from '../../components/Header'
import Lead from '../../components/Lead'
import WorkExperience from '../../components/WorkExperience'
import Education from '../../components/Education'
import ProfessionalSkills from '../../components/ProfessionalSkills'
import AwardsAndHonors from '../../components/AwardsAndHonors'
import Footer from '../../components/Footer'

/* export const metadata = {
  description: 'The React Framework for the Web',
} */

const redirect = (locale) => {
  window.location.href = `/${locale}`
}

export default function Index() {

  const t = useTranslations('Index');

  return (
    <>
      <div className={styles.col_1}>
        &nbsp;
      </div>
      <div className={styles.col_2}>
        <Header />
        <main>
          <Lead />
          <WorkExperience />
          <Education />
          <ProfessionalSkills />
          <AwardsAndHonors />
        </main>
        <Footer />
      </div>
      <div className={styles.col_3}>
        &nbsp;
      </div>
    </>
  );
}