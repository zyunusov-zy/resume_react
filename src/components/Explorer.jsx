import "../styles/Explorer.css"
import { useState } from "react";
import File from "./File.jsx"
import PropTypes from 'prop-types';

const Explorer = ({files, setSelectedFile}) =>{

    const [isDropdownOpen, setIsDropDownOpen] = useState(true);
    const [isSelectedHome, setIsSelectedHome] = useState(false)

    const toggleDropdown = () =>{
        setIsDropDownOpen(!isDropdownOpen);
    };

    const toggleIsSelectedHome = () =>
    {
        setIsSelectedHome(!isSelectedHome);
    };
    return (
        <>
            <p className="exp">Explorer</p>
            <a href="#" onClick={() => {toggleDropdown(); toggleIsSelectedHome();}} className={`dropdown-toggle ${isSelectedHome ? "selected" : ""}` }>
                <svg
                    className={`arrow-icon ${isDropdownOpen ? "" : "open"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    stroke="white"           
                    strokeWidth="0"      
                    fill="none"
                    >
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </svg>

                
                
                
                Home</a>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : 'closed'}`}>
                    <li>
                    {files.map((file, index) => (
                        <File key={index} name={file} onClick={setSelectedFile}/>
                    ))}
                    </li>
                </ul>
            
        </>
    );
};

Explorer.propTypes = {
    files: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSelectedFile: PropTypes.func.isRequired,
};

export default Explorer;