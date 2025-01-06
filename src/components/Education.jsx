import { useTranslation } from 'react-i18next';

const Education = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#1e1e1e] text-white max-w-6xl mx-auto p-9">
            <h2 className="text-4xl font-semibold mb-6">{t('education.header')}</h2>
            <hr className="my-4 border-t-2 border-gray-600" />

            <ul className="space-y-8">
                {/* University 1 */}
                <li>
                    <div className="flex items-center space-x-4">
                        <span className="bg-gray-700 text-white py-1 px-4 rounded-full text-sm">
                            {t('education.university1.date')}
                        </span>
                        <h3 className="text-2xl">
                            <a href="https://www.rtu.lv/en" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                {t('education.university1.name')}
                            </a>
                        </h3>
                    </div>
                    <ul className="list-inside space-y-2 mt-2 pl-10">
                        <li>{t('education.university1.fac')}</li>
                    </ul>
                </li>

                {/* University 2 */}
                <li>
                    <div className="flex items-center space-x-4">
                        <span className="bg-gray-700 text-white py-1 px-4 rounded-full text-sm">
                            {t('education.university2.date')}
                        </span>
                        <h3 className="text-2xl">
                            <a href="https://www.isma.lv/ru/" className="text-blue-400 hover:underline"  target="_blank" rel="noopener noreferrer">
                                {t('education.university2.name')}
                            </a>
                        </h3>
                    </div>
                    <ul className="list-inside space-y-2 mt-2 pl-10">
                        <li>{t('education.university2.fac')}</li>
                        <li>{t('education.university2.thesis')}</li>
                    </ul>
                </li>

                {/* University 3 */}
                <li>
                    <div className="flex items-center space-x-4">
                        <span className="bg-gray-700 text-white py-1 px-4 rounded-full text-sm">
                            {t('education.university3.date')}
                        </span>
                        <h3 className="text-2xl">
                            <a href="https://www.42network.org/" className="text-blue-400 hover:underline"  target="_blank" rel="noopener noreferrer">
                                {t('education.university3.name')}
                            </a>
                        </h3>
                    </div>
                    <ul className="list-inside space-y-2 mt-2 pl-10">
                        <li>{t('education.university3.fac')}</li>
                        <li>{t('education.university3.thesis')}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Education;
