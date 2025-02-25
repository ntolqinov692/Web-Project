// src/components/CourseCard.js
import React from 'react';
import users from '../images/users.png';
import duration from '../images/duration.png';

const CourseCard = ({ imgURL, title, prof, students, des, showCloseButton, onEnroll }) => {
    return (
        <div className="courses__card">
            <div className="courses__img">
                <img src={imgURL} alt={title} />
                {showCloseButton && (
                    <button className="close-btn" onClick={() => alert('Closed!')}>
                        &times;
                    </button>
                )}
            </div>
            <div className="courses__card-info">
                <h4>{title}</h4>
                <h5>{prof}</h5>
                <p>{des}</p>
                <div className="courses__card-row">
                    <div>
                        <span className="courses__card-icon">
                            <img src={users} alt="" />{students}
                        </span>
                    </div>
                    <div>
                        <span className="courses__card-icon">
                            <img src={duration} alt="" />72h
                        </span>
                    </div>
                    <div className="courses__card-price">$99.0</div>
                </div>
                <button className={"courses__card-price"} onClick={onEnroll}>Enroll</button>
            </div>
        </div>
    );
};

export default CourseCard;