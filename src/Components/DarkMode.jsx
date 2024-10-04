import React from "react";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";

const DarkMode = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div className="fixed top-4 right-4 z-50 p-2">
            <input
                type="checkbox"
                id="darkmode-toggle"
                checked={isDarkMode}
                onChange={toggleDarkMode}  
                className="hidden"
            />
            <label
                htmlFor="darkmode-toggle"
                className={`relative flex items-center justify-between w-[65px] h-[30px] rounded-full cursor-pointer transition-all duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
                <span
                    className={`absolute top-[3px] w-[25px] h-[25px] rounded-full shadow-md transition-all duration-300 ${isDarkMode ? 'left-[35px] bg-gray-500' : 'left-[3px] bg-gradient-to-b from-yellow-400 to-yellow-600'}`}
                ></span>

                <Sun
                    className={`absolute w-[20px] top-[5px] left-[5px] transition-all duration-300 ${isDarkMode ? 'fill-gray-400' : 'fill-white'}`}
                />
                <Moon
                    className={`absolute w-[20px] top-[5px] left-[40px] transition-all duration-300 ${isDarkMode ? 'fill-white' : 'fill-gray-500'}`}
                />
            </label>
        </div>
    );
};

export default DarkMode;
