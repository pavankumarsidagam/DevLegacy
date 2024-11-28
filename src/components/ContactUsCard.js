import React from "react";
import { GoArrowUpRight,GoArrowDown } from "react-icons/go";

const ContactUsCard = () => {
    return (
        <div className="card bg-white rounded-lg p-4">
            <div className="text-sm card-content-syne text-gray-600 w-full">
                <span >Available for freelance. Hit me up for a collab 🦾</span>
                <div className="card-content-syne p-1 rounded-full border text-gray">
                    <a href="mailto:pavankumarsidagam1@gmail.com?subject=Hey%20Favan!%20Let%27s%20Catch%20Up%20😄" className="py-1 text-xs border-gray-600 flex items-center justify-between">
                        <span>Contact Me</span>
                        <GoArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUsCard;