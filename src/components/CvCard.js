import React from "react";
import { GoArrowUpRight,GoArrowDown } from "react-icons/go";

const CvCard = () => {
    return (
        <div className="card bg-white rounded-lg p-6 row-span-1 md:row-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >CV</h4>
            <div className="flex flex-col space-y-2 md:mt-8 sm:mt-3">

                <div className="card-content-syne border rounded-xl text-gray-600 w-full">
                   <a 
                        href = "/PavanKumarResume.pdf"
                        target="_blank"
                        className="py-1 px-2 text-sm border-gray-600 flex items-center justify-between">
                        <span>View</span>
                        <GoArrowUpRight />
                   </a>
                </div>

                <div className="card-content-syne border rounded-xl text-gray-600 w-full">
                   <a 
                        href = "/PavanKumarResume.pdf"
                        download
                        className="py-1 px-2 text-sm border-gray-600 flex items-center justify-between">
                        <span>Download</span>
                        <GoArrowDown />
                   </a>
                </div>

            </div>
        </div>
    );
};

export default CvCard;