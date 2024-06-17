import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';

import React from 'react'

function Footer() {
    const t = useTranslations('Index');
    return (
        <footer>
            <hr />
            <p>Teresópolis, Rio de Janeiro, {t('brazil')} - {2024}</p>
        </footer>
    )
}

export default Footer