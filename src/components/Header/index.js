import React from "react";
import { useState} from 'react';
import Logo  from "./../../assets/logo192.png";
import { Link } from "react-router-dom";

const Header= ({
    ...otherProps
})=>{
    const[Active, setActive]= useState(false);
    const onClick = ()=>{
        setActive(!Active);
    };
    return(
        <header className="bg-white relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="w-16">
                <img src={Logo} alt="" class='width-full'/>
                </div>
                <div onClick={onClick}
                    className = {`md:hidden uppercase
                    `}
                    >
                Menu
                </div>
                <nav
                className={`
                ${!Active && 'hidden'}
                absolute flex flex-col bg-white top-full w-full left-0 z-20 
                md:static md:w-auto md:flex
                `}
                >
                    <ul className=" md:flex md:flex-row">
                        <li className="list-none md:mr-5">
                            <Link  to="/home" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                            pt-2.5 px-2.5" 
                            > 
                             Home
                            </Link>
                        </li>
                        <li className="list-none md:mr-5">
                            <Link to="/about" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                            pt-2.5 px-2.5"
                            > 
                            About
                            </Link>
                        </li>
                        <li className="list-none md:mr-5">
                            <Link to="/apply" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                            pt-2.5 px-2.5"
                            > 
                            Apply
                            </Link>
                         </li>
                        <li  className="list-none md:mr-5">
                            <Link to="/signin" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                            pt-2.5 px-2.5"
                            > 
                             Sign in
                            </Link>
                        </li>
                        <li className="list-none md:mr-5">
                            <Link to="/contact" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                            pt-2.5 px-2.5"
                            > 
                            Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
);
};
export default Header;