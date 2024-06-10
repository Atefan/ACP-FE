import React from "react";

const CenteredBox = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-8 shadow-md rounded-md">
                {children}
            </div>
        </div>
    );
};

export default CenteredBox;