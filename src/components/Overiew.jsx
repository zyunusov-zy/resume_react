import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Education from "./Education";
import '../styles/index.css';
import Over from "./Over";
import Languages from "./Languages";

const Overview = () => {

    return (  
        <div className="bg-[#1e1e1e] text-white mx-auto overflow-y-auto scrollbar-auto">
            <div className="max-w-6xl mx-auto max-h-[94vh]">
                <Over />                
                <Skills></Skills>
                <Projects></Projects>
                <Education></Education>
                <Certificates></Certificates>
                <Languages />
            </div>
        </div>
    );
};

export default Overview;
