import { useTranslation } from 'react-i18next';

const Education = () => {
    const { t } = useTranslation();

    return (
        <div>
        <h2>{t('education.header')}</h2>

        <div>
            <h3>{t('education.university1.name')}</h3>
            <p><strong>{t('education.university1.date')}</strong>: {t('education.university1.date')}</p>
            <p><strong>{t('education.university1.fac')}</strong>: {t('education.university1.fac')}</p>
        </div>

        <div>
            <h3>{t('education.university2.name')}</h3>
            <p><strong>{t('education.university2.date')}</strong>: {t('education.university2.date')}</p>
            <p><strong>{t('education.university2.fac')}</strong>: {t('education.university2.fac')}</p>
            <p><strong>{t('education.university2.thesis')}</strong>: {t('education.university2.thesis')}</p>
        </div>

        <div>
            <h3>{t('education.university3.name')}</h3>
            <p><strong>{t('education.university3.date')}</strong>: {t('education.university3.date')}</p>
            <p><strong>{t('education.university3.fac')}</strong>: {t('education.university3.fac')}</p>
            <p><strong>{t('education.university3.thesis')}</strong>: {t('education.university3.thesis')}</p>
        </div>
        </div>
    );
};

export default Education;
