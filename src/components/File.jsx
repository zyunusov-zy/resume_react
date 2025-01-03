import PropTypes from 'prop-types';

const File = ({name, onClick, className}) => {
    return (
        <a href="#" onClick={() => onClick(name)} className={`${className || ''} `}>
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
    );
};

File.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};


export default File;