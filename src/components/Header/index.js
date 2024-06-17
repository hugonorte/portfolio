"use client";

import {useTranslations} from 'next-intl';
import styles from './styles.module.scss';

function Header() {
    const t = useTranslations('Index');

    const handleLanguageChange = (event) => {
        const language = event.target.value;
        window.location.href = `/${language}`;
    };
    return (
        <header className={styles.header}>
            <div>
                <h1>Hugo Norte</h1>  
                <h3>{t('professional_title')}</h3>
            </div>
            <div>
                <select 
                    id="language_selector" 
                    defaultValue="default"
                    onChange={(e) => {
                        handleLanguageChange(e)
                    }}>
                    <option value="pt-br"> 🇧🇷 PT-BR</option>
                    <option value="en">🇬🇧 EN </option>
                    <option value="de">🇩🇪 DE </option>
                    <option value="es">🇪🇸 ES </option>
                    <option value="default">{t('change_language')}</option>
                </select>
            </div>
        </header>
    )
}

export default Header