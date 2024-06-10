import React from "react";
import { behaviours, polarChartColors } from "../constant";

const Legend = () => {
    return (
        <div className="flex justify-center pt-32">
            {polarChartColors.map((color, index) => (
                <div key={index} className="flex items-center px-3">
                    <span className="w-4 h-4 mr-2" style={{ backgroundColor: color }}></span>
                    <span>{behaviours[index]}</span>
                </div>
            ))}
        </div>
    );
};

export default Legend;