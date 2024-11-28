import React from "react";

const ProjectsCard = () => {
    const textColor = 'text-gray-600';

    return(
        <div className="card bg-white rounded-lg p-6 col-span-1 row-span-1 md:row-span-3 md:col-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Projects</h4>
            <div className="text-sm card-content-syne max-h-60 overflow-y-hidden hover:overflow-y-auto">
                <div className="flex flex-col pb-2">
                <span className={textColor}>GME Budget</span>
                <span className='text-gray-400 text-xs'>Led the design and implementation of a Budget Management System for Ford’s GME team, optimizing cost estimations and headcount forecasts. Collaborated closely with clients, enhancing system performance, streamlining data retrieval, and ensuring accurate budget allocation.</span>
                </div>

                <div className="flex flex-col pb-2">
                <span className={textColor}>GME Overtime Management System</span>
                <span className='text-gray-400 text-xs'>Developed a comprehensive tool for overtime management, integrating dynamic calendar features and ensuring seamless workflows. Worked with global clients to ensure compliance with regional policies and delivered a scalable solution.</span>
                </div>

                <div className="flex flex-col pb-2">
                <span className={textColor}>ReferNext</span>
                <span className='text-gray-400 text-xs'>Developed innovative solutions to resolve complex technical challenges. Collaborated with the team to troubleshoot deployment issues, apply research-driven improvements, and streamline project execution.</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;