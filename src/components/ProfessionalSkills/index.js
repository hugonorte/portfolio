import { useTranslations } from 'next-intl';
import styles from './styles.module.scss'


function ProfessionalSkills() {
    const t = useTranslations('Index');

    return (
        <section id='professional_skills'>
            <h2>{t('professional_skills_title')}</h2>
            <h3>{t('programming_languages')}</h3>
            <ul>
                <li>Python</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li>GO</li>
            </ul>

            <h3>{t('databases')}</h3>
            <ul>
                <li>MySQL</li>
                <li>PostGres</li>
            </ul>

            <h3>{t('frontend')}</h3>
            <ul>
                <li>NextJs</li>
                <li>React</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>PostGres</li>
            </ul>

            <h3>{t('idioms.title')}</h3>
            <ul>
                <li>{t('idioms.country.en')} – {t('idioms.proficiency.advanced')}</li>
                <li>{t('idioms.country.es')} – {t('idioms.proficiency.basic')}</li>
                <li>{t('idioms.country.ch')} – {t('idioms.proficiency.basic')}</li>
                <li>{t('idioms.country.pt')} – {t('idioms.proficiency.native')}</li>
            </ul>
        </section>
    )
}

export default ProfessionalSkills