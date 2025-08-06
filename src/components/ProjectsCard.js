import React from "react";

const ProjectsCard = () => {
    const textColor = 'text-gray-600';

    return(
        <div className="card bg-white rounded-lg p-6 col-span-1 row-span-1 md:row-span-3 md:col-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Projects</h4>
            <div className="text-sm card-content-syne max-h-60 overflow-y-hidden hover:overflow-y-auto">

                <div className="flex flex-col pb-2">
                <span className='text-gray-600'>TMS - Tutor Management System (In Progress)</span>
                <span className="text-gray-400 text-xs">Developing a Tutor Management System to simplify student management, payment tracking, and communication. Features include user authentication, a dashboard for insights, automated SMS reminders, and a student portal for managing records. Built with React, Node.js, Express.js, and MongoDB, focusing on responsive design and efficiency.</span>
                </div>

                <div className="flex flex-col pb-2">
                <span className={textColor}>ReferNext</span>
                <span className='text-gray-400 text-xs'>Developed innovative solutions to resolve complex technical challenges. Collaborated with the team to troubleshoot deployment issues, apply research-driven improvements, and streamline project execution.</span>
                </div>

                <div className="flex flex-col pb-2">
                <span className={textColor}>Resume Portfolio Website</span>
                <span className="text-gray-400 text-xs">Designed and developed a personal resume website using React, focusing on modular components, responsive design, and modern deployment tools. The project serves as a portfolio showcase.</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;