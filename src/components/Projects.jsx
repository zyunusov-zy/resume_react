import { useTranslation } from 'react-i18next';
import '../styles/index.css'; 

const Projects = () => {
const { t } = useTranslation();

const projects = t('projects', { returnObjects: true });
console.log(projects);

return (
    <div className="bg-[#1e1e1e] text-white mx-auto overflow-y-auto scrollbar-auto">
    <div className="max-w-6xl mx-auto p-9 max-h-[94vh]">
        <h2 className="text-4xl font-semibold mb-6">{projects[0].header_main}</h2>
        <p className="mb-6">{projects[0].overview}</p>
        <hr className="my-4 border-t-2 border-gray-600" />

        {projects.map((category, index) => (
        <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{category.header}</h3>
            <hr className="my-4 border-t-2 border-gray-600" />
            <ul className="space-y-6 pl-5">
            {category.items.map((project, idx) => (
                <li key={idx} className="mb-4">
                {/* Project Name as a Link */}
                <a
                    href="#"
                    className="text-blue-400 hover:underline text-lg font-semibold"
                >
                    {project.name}
                </a>
                <div className="mt-2">
                    {/* Purpose as List */}
                    <ul className="list-disc pl-8 mt-2">
                    <li>
                        <strong>Purpose:</strong> {project.purpose}
                    </li>
                    </ul>

                    {/* Technologies Used as List */}
                    <ul className="list-disc pl-8 mt-2">
                    <li>
                        <strong className='pr-1'>Technologies Used:</strong>
                        {project.technologies_used.join(', ')}
                    </li>
                    </ul>
                </div>
                </li>
            ))}
            </ul>
        </div>
        ))}
    </div>
    </div>
);
};

export default Projects;
