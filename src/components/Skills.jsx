import { useTranslation } from 'react-i18next';

const Skills = () => {
const { t } = useTranslation();

return (
    <div>
            <h2>{t('skills.header')}</h2>

            <div>
                <h3>{t('skills.tech_stack')}</h3>
                <ul>
                <li>{t('skills.tech_stack_skills.sys_ad')}</li>
                <li>{t('skills.tech_stack_skills.low_lvl')}</li>
                <li>{t('skills.tech_stack_skills.sof')}</li>
                <li>{t('skills.tech_stack_skills.web')}</li>
                </ul>
            </div>

            <div>
                <h3>{t('skills.prog_lan')}</h3>
                <ul>
                <li>{t('skills.prog_skills.c')}</li>
                <li>{t('skills.prog_skills.c_plus')}</li>
                <li>{t('skills.prog_skills.python')}</li>
                <li>{t('skills.prog_skills.javascript')}</li>
                </ul>
            </div>

            <div>
                <h3>{t('skills.databases')}</h3>
                <ul>
                <li>{t('skills.databases_skill.post')}</li>
                <li>{t('skills.databases_skill.lite')}</li>
                </ul>
            </div>

            <div>
                <h3>{t('skills.techno')}</h3>
                <ul>
                <li>{t('skills.tech_sk.git')}</li>
                <li>{t('skills.tech_sk.docker')}</li>
                <li>{t('skills.tech_sk.unix')}</li>
                <li>{t('skills.tech_sk.nginx')}</li>
                <li>{t('skills.tech_sk.redis')}</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
