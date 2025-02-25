// src/pages/learning page/LearningPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './LearningPage.css';

const LearningPage = () => {
    const { courseId } = useParams();
    const [progress, setProgress] = useState(0);

    // Sample course content
    const courseContent = [
        { id: 1, title: 'Introduction to React', type: 'video', duration: '10:00', completed: false },
        { id: 2, title: 'Components and Props', type: 'video', duration: '15:00', completed: false },
        { id: 3, title: 'State and Lifecycle', type: 'video', duration: '20:00', completed: false },
    ];

    const [currentContent, setCurrentContent] = useState(courseContent[0]);

    const handleMarkComplete = (contentId) => {
        const updatedContent = courseContent.map((content) =>
            content.id === contentId ? { ...content, completed: true } : content
        );
        const completedCount = updatedContent.filter((content) => content.completed).length;
        setProgress((completedCount / courseContent.length) * 100);
    };

    return (
        <div className="learning-page">
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="learning-container">
                <div className="sidebar">
                    <h3>Course Content</h3>
                    <ul>
                        {courseContent.map((content) => (
                            <li
                                key={content.id}
                                className={currentContent.id === content.id ? 'active' : ''}
                                onClick={() => setCurrentContent(content)}
                            >
                                {content.title} <span>{content.duration}</span>
                                {content.completed && <span className="completed">✔</span>}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="content-area">
                    <h2>{currentContent.title}</h2>
                    <div className="video-container">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/Ieegg45Pojw"
                            title="Course Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <button className={`complete-btn ${currentContent.completed ? 'completed' : ''}`} onClick={() => handleMarkComplete(currentContent.id)} disabled={currentContent.completed}>{currentContent.completed ? 'Completed' : 'Mark as Complete'}</button>
                </div>
            </div>
        </div>
    );
};

export default LearningPage;