import {useTranslations} from 'next-intl';
import styles from './styles.module.scss';

function WorkExperience() {
    const t = useTranslations('Index');

    return (
        <section id="work_experience">
            <h2>{t("work_experience_title")}</h2>
            <div id="work_experience_01">
                <h3>{t("work_experience_cards.card_01.title")}</h3>
                <p className={styles.work_experience_company}>
                    <strong>{t("company")}</strong>: Medportal&nbsp; 
                    <span className={styles.work_experience_time}>
                        (1.5 {t("years")})
                    </span>
                </p>
                <p className={styles.work_experience_location}>
                    <strong>{t("location")}</strong>: Teresópolis, Rio de Janeiro,&nbsp; 
                    {t("brazil")}
                </p>
                <ul>
                    <li>{t("work_experience_cards.card_01.bullet01")}</li>
                    <li>{t("work_experience_cards.card_01.bullet02")}</li>
                    <li>{t("work_experience_cards.card_01.bullet03")}</li>
                </ul>
            </div>
            <div id="work_experience_02">
                <h3>{t("work_experience_cards.card_02.title")}</h3>
                <p className={styles.work_experience_company}>
                    <strong>{t("company")}</strong>: Medportal&nbsp; 
                    <span className={styles.work_experience_time}>(4 {t("years")})</span>
                </p>
                <p className={styles.work_experience_location}>
                    <strong>{t("location")}</strong>: Teresópolis, Rio de Janeiro,&nbsp; 
                    {t("brazil")}
                </p>
                <ul>
                    <li>{t("work_experience_cards.card_02.bullet01")}</li>
                    <li>{t("work_experience_cards.card_02.bullet02")}</li>
                    <li>{t("work_experience_cards.card_02.bullet03")}</li>
                </ul>
            </div>
        </section>
    );
}

export default WorkExperience;
