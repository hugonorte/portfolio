import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';

function Education() {
    const t = useTranslations('Index');

    return (
        <section id='education'>
            <h2>{t('education_title')}</h2>
            <div id="education_01" className={styles.education_card}>
                <h3>{t('education_cards.card_01.title')} <span className={styles.education_h3_parenthesis}>({t('education_cards.card_01.title_parenthesis')})</span></h3>
                <p className={styles.education_degree}>{t('education_cards.card_01.degree')} – {t('from')} 2023 – 2027</p>
                <p className={styles.education_instituition}>
                    <strong>{t('institution')}</strong>: Unifeso
                </p>
                <p className={styles.education_location}>
                    <strong>{t('location')}</strong>: Teresópolis, Rio de Janeiro, {t('brazil')}
                </p>
            </div>
            <div id="education_02" className={styles.education_card}>
                <h3>{t('education_cards.card_02.title')}</h3>
                <p className={styles.education_degree}>{t('education_cards.card_01.degree')} – From 2002 – 2006</p>
                <p className={styles.education_instituition}>
                    <strong>{t('institution')}</strong>: UniverCidade
                </p>
                <p className={styles.education_location}>
                    <strong>{t('location')}</strong>: Rio de Janeiro, Rio de Janeiro, {t('brazil')}
                </p>
            </div>
        </section>
    )
}

export default Education