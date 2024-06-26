import { useTranslations } from 'next-intl';
import styles from './styles.module.scss'
import Header from '../../components/Header'
import Lead from '../../components/Lead'
import WorkExperience from '../../components/WorkExperience'
import Education from '../../components/Education'
import ProfessionalSkills from '../../components/ProfessionalSkills'
import AwardsAndHonors from '../../components/AwardsAndHonors'
import Footer from '../../components/Footer'
import {unstable_setRequestLocale} from 'next-intl/server';

/* export const metadata = {
  description: 'The React Framework for the Web',
} */
const locales = ['en', 'de', 'pt-br', 'es'];

export async function generateStaticParams() {
  // Retorna uma lista de objetos contendo os parâmetros de rota possíveis
  return locales.map(locale => ({ locale }));
}

export default function Index({ params }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  const { slug } = params;
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