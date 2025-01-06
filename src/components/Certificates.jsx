import { useTranslation } from 'react-i18next';

const Certificates = () => {
    const { t } = useTranslation();

    return (
        <div className='max-w-6xl mx-auto p-9 text-white'>
            <h1 className='text-4xl font-semibold flex items-center'>
                {t('certificates.header')}
            </h1>

            <hr className='my-4 border-t-2 border-gray-600' />

            <ul className='list-disc pl-10 space-y-3'>
                <li className='text-md text-white'>
                    <span className='font-medium'>{t('certificates.cert')}</span>
                </li>
            </ul>
        </div>
    );
};

export default Certificates;
