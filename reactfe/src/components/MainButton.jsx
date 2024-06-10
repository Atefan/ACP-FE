import React, { useState } from "react";

const MainButton = ({ text, children }) => {
    const [showMainButtonProperties, setMainButtonProperties] = useState(false);

    const handleClick = () => {
        setMainButtonProperties(!showMainButtonProperties);
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded w-full"
            >
                {text}
            </button>
            {showMainButtonProperties && children}
        </div>
    );
};

export default MainButton;
