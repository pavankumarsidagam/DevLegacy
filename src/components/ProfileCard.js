import React from 'react';

const ProfileCard = ({className = 'col-span-1 md:col-span-2' }) => {
    const title = 'PAVAN KUMAR SIDAGAM';
    const designation = 'Software Developer';

    return (
        <div className={`card bg-white rounded-lg p-6 ${className}`}>
            <h4 className="text-4xl font-bold card-content">{title}</h4>
            <p className="text-gray-600 text-lg card-content">{designation}</p>
      </div>
    );
};

export default ProfileCard;