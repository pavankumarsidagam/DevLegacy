import React from "react";

const EducationCard = () => {
    const textColor = 'text-gray-600';

    return(
        <div className="card bg-white rounded-lg p-6 col-span-1 row-span-1 md:row-span-2 md:col-span-2 ">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Experience & Education</h4>
            <div className="text-sm card-content-syne max-h-60 overflow-y-hidden hover:overflow-y-auto">
                <div className="flex flex-col pb-2">
                <span className={textColor}>Software Developer</span>
                <span className={textColor}>Jan 2024 - Present</span>
                <span className='text-gray-400 text-xs'>Quickly mastered ColdFusion and contributed to major projects, enhancing team performance and project delivery. Collaborated with international clients and internal teams to drive successful integrations, with notable recognition for exceptional contributions to the GME Budget Project.</span>
                </div>

                <div className="flex flex-col pb-2">
                <span className={textColor}>Junior Software Developer</span>
                <span className={textColor}>Oct 2023 - Jan 2024</span>
                <span className='text-gray-400 text-xs'>Developed key projects like an Admin Portal and Invoice Management System, gaining hands-on experience in web technologies. Strengthened communication skills through presentations and gained a comprehensive understanding of the project lifecycle.</span>
                </div>

                <div className="flex flex-col pb-2">
                <span className={textColor}>Bsc Computer Science</span>
                <span className={textColor}>2019 - 2022</span>
                <span className='text-gray-400 text-xs'>CGPA: 7.91</span>
                </div>


                <div className="flex flex-col pb-2">
                <span className={textColor}>Higher Secondary Education</span>
                <span className={textColor}>2017 - 2019</span>
                <span className='text-gray-400 text-xs'>CGPA: 8.44</span>
                </div>

                <div className="flex flex-col pb-2">
                <span className={textColor}>Primary School Education</span>
                <span className={textColor}>2017</span>
                <span className='text-gray-400 text-xs'>CGPA: 9.7</span>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;