import React from "react";
import Header from "./../../components/Header";
import Land from "./../../assets/Land.jpg";

const LandingPageLayout =({
    heading,
    ...otherProps
})=> {
    return(
        <div className="min-h-full bg-gray-100 font-body">
            <div className="h-auto flex flex-col">
            <Header/>
            <div className="
            relative flex items-center justify-center h-60	
            bg-cover bg-center bg-fixed bg-no-repeat
            " 
            style={{
                backgroundImage:`url(${Land})`
            }}
            >
                {heading && <h1 className="
                 relative px-2.5 text-white uppercase z-10 text-4xl text-center md:text-6xl
                 ">
                    {heading}
                    </h1>}
                <div className="
                z-0 absolute-top-0-left-0 h-full w-full  bg-black opacity-40
                "
                    />
            </div>
            </div>
            <div className="
             w-full mx-w-7xl mx-auto
            ">
                {otherProps.children}
            </div>
        </div>
);
};
LandingPageLayout.defaultProps ={
  heading:" ",
};
export default LandingPageLayout;