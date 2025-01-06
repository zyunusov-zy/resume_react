import { useTranslation } from 'react-i18next';
import '../styles/index.css'; // Import custom styles for the scrollbar

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1e1e1e] text-white mx-auto overflow-y-auto scrollbar-auto">
        <div className="max-w-6xl mx-auto p-9 max-h-[94vh]">
            <h2 className="text-4xl font-semibold mb-6">{t('skills.header')}</h2>
            <hr className="my-4 border-t-2 border-gray-600" />

            {/* Scrollable container */}
                {/* Tech Stack */}
                <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('skills.tech_stack')}</h3>
                <hr className="my-4 border-t-2 border-gray-600" />
                <ul className="list-disc space-y-2 mt-2 pl-10">
                    <li>{t('skills.tech_stack_skills.sys_ad')}</li>
                    <li>{t('skills.tech_stack_skills.low_lvl')}</li>
                    <li>{t('skills.tech_stack_skills.sof')}</li>
                    <li>{t('skills.tech_stack_skills.web')}</li>
                </ul>
                </div>

                {/* Programming Languages */}
                <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('skills.prog_lan')}</h3>
                <hr className="my-4 border-t-2 border-gray-600" />
                <ul className="list-disc space-y-2 mt-2 pl-10">
                    <li>{t('skills.prog_skills.c')}</li>
                    <li>{t('skills.prog_skills.c_plus')}</li>
                    <li>{t('skills.prog_skills.python')}</li>
                    <li>{t('skills.prog_skills.javascript')}</li>
                </ul>
                </div>

                {/* Databases */}
                <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('skills.databases')}</h3>
                <hr className="my-4 border-t-2 border-gray-600" />
                <ul className="list-disc space-y-2 mt-2 pl-10">
                    <li>{t('skills.databases_skill.post')}</li>
                    <li>{t('skills.databases_skill.lite')}</li>
                </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('skills.techno')}</h3>
                <hr className="my-4 border-t-2 border-gray-600" />
                <ul className="list-disc space-y-2 mt-2 pl-10">
                    <li>{t('skills.tech_sk.git')}</li>
                    <li>{t('skills.tech_sk.docker')}</li>
                    <li>{t('skills.tech_sk.unix')}</li>
                    <li>{t('skills.tech_sk.redis')}</li>
                </ul>
                </div>
        </div>
    </div>
  );
};

export default Skills;
