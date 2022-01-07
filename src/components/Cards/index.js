import React from 'react';
import Photo from './../../assets/boble.jpg'

const Cards=({
    ...otherProps
})=>{
    return(
        <div className="flex flex-row flex-wrap py-12 justify-center">
            <div className=" w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
            <div className="bg-white">
            <div>
                <img src= {Photo} alt=" " className=" w-full"/>
            </div>
            <div className="p-2.5">
                <ul>
                    <li className="list:none">
                        <span className="font-bold text-base">
                            Jain University
                        </span>
                    </li >
                    <li className="list:none">
                        <span className=" text-base">
                        Looking to accelerate your career, increase your
                         business knowledge and leadership skills and 
                         maximise your board level awareness without 
                         stepping out of work? Our part-time programme has 
                         been carefully designed for those wanting to study 
                         an MBA at a world-leading business school but are 
                         limited in the amount of time they can take away from 
                         their jobs.
                        </span>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            <div className=" w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
            <div className="bg-white">
            <div>
                <img src= {Photo} alt=" " className=" w-full"/>
            </div>
            <div className="p-2.5">
                <ul>
                    <li className="list:none">
                        <span className="font-bold text-base">
                            Chandigarh University
                        </span>
                    </li >
                    <li className="list:none">
                        <span className=" text-base">
                        Looking to accelerate your career, increase your
                         business knowledge and leadership skills and 
                         maximise your board level awareness without 
                         stepping out of work? Our part-time programme has 
                         been carefully designed for those wanting to study 
                         an MBA at a world-leading business school but are 
                         limited in the amount of time they can take away from 
                         their jobs.
                        </span>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            <div className=" w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
            <div className="bg-white">
            <div>
                <img src= {Photo} alt=" " className=" w-full"/>
            </div>
            <div className="p-2.5">
                <ul>
                    <li className="list:none">
                        <span className="font-bold text-base ">
                            COllegevidya university
                        </span>
                    </li >
                    <li className="list:none">
                        <span className=" text-base">
                        Looking to accelerate your career, increase your
                         business knowledge and leadership skills and 
                         maximise your board level awareness without 
                         stepping out of work? Our part-time programme has 
                         been carefully designed for those wanting to study 
                         an MBA at a world-leading business school but are 
                         limited in the amount of time they can take away from 
                         their jobs.
                        </span>
                    </li>
                </ul>
            </div>
            </div>
            </div>
        </div>
);
};
export default Cards;