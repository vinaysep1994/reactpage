import React from "react";

const Footer =({
    ...otherProps
}) =>{
    return(
        <footer className=" bg-indigo-500">
        <div className="w-full mx-w-7xl mx-auto py-14 px-2.5">

            <span className="text-base" 
            >
                COPYRIGHT  @ 2021
            </span>

        </div>
        </footer>
);
};
export default Footer;
