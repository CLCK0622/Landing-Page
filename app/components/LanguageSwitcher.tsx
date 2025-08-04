"use client";

import { useTranslation } from 'react-i18next';
import styles from '@/styles/LanguageSwitcher.module.scss';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';

    const toggleLanguage = () => {
        const newLang = isEnglish ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div
            className={`${styles.switchContainer} ${isEnglish ? styles.isEnglish : ''}`}
            onClick={toggleLanguage}
            role="switch"
            aria-checked={isEnglish}
            aria-label="Toggle language between Chinese and English"
        >
            <span className={`${styles.label} ${!isEnglish ? styles.active : ''}`}>ZH</span>
            <div className={styles.track}>
                <div className={styles.thumb}></div>
            </div>
            <span className={`${styles.label} ${isEnglish ? styles.active : ''}`}>EN</span>
        </div>
    );
}