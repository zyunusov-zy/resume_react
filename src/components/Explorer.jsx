import "../styles/Explorer.css"
import { useState } from "react";
import PropTypes from 'prop-types';

const File = ({name}) => {
    return (
        <li>
            <a href="#">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    color="#6997d5"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "rgb(105, 151, 213)" }}
                >
                    <path d="M6.345 5h2.1v6.533H6.993l.055-5.31-1.774 5.31H4.072l-1.805-5.31c.04.644.06 5.31.06 5.31H1V5h2.156s1.528 4.493 1.577 4.807L6.345 5zm6.71 3.617v-3.5H11.11v3.5H9.166l2.917 2.916L15 8.617h-1.945z"></path>
                </svg>


                {name}
            </a>
        </li>
    );
};

File.propTypes = {
    name: PropTypes.string.isRequired,
};

const Explorer = () =>{

    const [isDropdownOpen, setIsDropDownOpen] = useState(true);
    const [isSelectedHome, setIsSelectedHome] = useState(false)

    const toggleDropdown = () =>{
        setIsDropDownOpen(!isDropdownOpen);
    };

    const toggleIsSelectedHome = () =>
    {
        setIsSelectedHome(!isSelectedHome);
    };

    const files = ["overview.md", "skills.md", "education.md", "projects.md","certificates.md"];

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
                    {files.map((file, index) => (
                        <File key={index} name={file}/>
                    ))}
                </ul>
            
        </>
    );
};

export default Explorer;