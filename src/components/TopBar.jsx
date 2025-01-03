import PropTypes from "prop-types";
import File from "./File.jsx";


const TopBar  = ({files, setSelectedFile}) => {
    return (
        <>
            {files.map((file, index) => (
                <File key={index} name={file} onClick={setSelectedFile} className="topbar-file"/>
            ))}
        </>
    );
};

TopBar.propTypes = {
    files: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSelectedFile: PropTypes.func.isRequired,
};

export default TopBar;