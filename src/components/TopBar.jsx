import PropTypes from "prop-types";
import File from "./File.jsx";
import "../styles/TopBar.css";


const TopBar  = ({files, setSelectedFile, selectedFile}) => {
    return (
        <>
            {files.map((file, index) => (
                <File 
                key={index} 
                name={file} 
                onClick={setSelectedFile} 
                className={file === selectedFile ? "topbar-file selected" : "topbar-file"}
                />
            ))}
        </>
    );
};

TopBar.propTypes = {
    files: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSelectedFile: PropTypes.func.isRequired,
    selectedFile: PropTypes.string.isRequired,
};

export default TopBar;