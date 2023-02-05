import React from "react";
import 'animate.css';

const Slider = () => {
    
    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative w-full overflow-hidden">
                <div className="relative flex w-full">
                    <div
                    className="relative w-full"
                    >
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="relative w-full h-screen object-cover object-center" style={{ filter: "brightness(50%)", height: '70vh'}} />
                    <div className="absolute inset-0 h-110 flex flex-col fl items-center justify-center text-white p-4 text-4xl ">
                        <p className="head text-center text-gray-300 font-medium animate__animated animate__slideInRight animate__delay-2s">Welcome to DreamBlog</p>
                        <p className="head text-center text-gray-300 font-semibold">For Dreamers...</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default Slider;
