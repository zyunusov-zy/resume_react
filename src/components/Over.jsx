import { useTranslation } from 'react-i18next';

const Over = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-6xl mx-auto p-9 text-white">
            <h1 className="text-4xl font-semibold flex items-center">
                {t('overview.header')}
            </h1>
            <hr className="my-4 border-t-2 border-gray-600" />
            <div className="mt-4">
                <h3 className="text-2xl font-bold">{t('overview.summary_header')}</h3>
                <hr className="my-4 border-t-2 border-gray-600" />
                <p className="mt-2">{t('overview.summary_text')}</p>
            </div>
        </div>
    );
};

export default Over;
