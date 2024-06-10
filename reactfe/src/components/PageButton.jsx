import React from 'react';
import {useNavigate} from 'react-router-dom';

const PageButton = ({ text, page, clicked, role}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(page, {state: {role: role, clicked: clicked}});
    };

    return (
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default PageButton;
