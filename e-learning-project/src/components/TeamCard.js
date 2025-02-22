import React from 'react';
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';

const TeamCard = ({ imgURL, prof, des, socialMedia }) => {
    return (
        <div className="team__card">
            <img src={imgURL} alt={prof} />
            <h4>{prof}</h4>
            <div className="team__card-info">
                <h5>{des}</h5>
                <div className="team__card-social">
                    <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                        <RiFacebookFill />
                    </a>
                    <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <RiInstagramFill />
                    </a>
                    <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <RiTwitterFill />
                    </a>
                    <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <RiLinkedinFill />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;