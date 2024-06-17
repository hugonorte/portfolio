import { useTranslations } from 'next-intl';
import styles from './styles.module.scss'

function AwardsAndHonors() {
    const t = useTranslations('Index');

    return (
        <section id='award_and_honors'>
            <h2>{t('award_and_honors_title')}</h2>

            <div id="award_and_honors_01" className={styles.education_card}>
                <h3>Techstars - Startup Weekend 2023</h3>
                <p className={styles.education_instituition}>
                    <strong>{t('type')}</strong>: {t('award_and_honors_cards.card_01.type')}
                </p>
                <p className={styles.education_location}>
                    <strong>{t('location')}</strong>: Teresópolis, Rio de Janeiro, {t('brazil')}
                </p>
                <ul>
                    <li>{t('award_and_honors_cards.card_01.bullet01')}</li>
                    <li>{t('award_and_honors_cards.card_01.bullet02')}</li>
                </ul>
            </div>

            <div id="award_and_honors_02" className={styles.education_card}>
                <h3>Hackaton Unifeso 2023</h3>
                <p className={styles.education_instituition}>
                    <strong>{t('type')}</strong>: {t('award_and_honors_cards.card_02.type')}
                </p>
                <p className={styles.education_location}>
                    <strong>{t('location')}</strong>: Teresópolis, Rio de Janeiro, {t('brazil')}
                </p>
                <ul>
                    <li>{t('award_and_honors_cards.card_02.bullet01')}</li>
                    <li>{t('award_and_honors_cards.card_02.bullet02')}</li>
                </ul>
            </div>
        </section>
    )
}

export default AwardsAndHonors