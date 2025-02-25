// src/pages/course page/CoursePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../../components/CoursesCard';
import { data } from '../../sections/courses/data';
import Ranking from '../../components/Ranking';
import './CoursePage.css';

const CoursePage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('all');
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [showDashboard, setShowDashboard] = useState(false);
    const [showRanking, setShowRanking] = useState(false);

    // Filter and search logic
    const filteredCourses = data.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'all' || course.category === filter;
        return matchesSearch && matchesFilter;
    });

    const generateRandomUsers = (count) => {
        const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"];
        const users = [];

        for (let i = 0; i < count; i++) {
            users.push({
                id: i + 1,
                name: names[Math.floor(Math.random() * names.length)],
                exp: Math.floor(Math.random() * 1000), // Random exp between 0 and 1000
            });
        }

        return users;
    };

    const currentUser = {
        id: 999,
        name: "You",
        exp: 0, // Default exp value
    };

    const allUsers = [...generateRandomUsers(10), currentUser];
    const sortedUsers = allUsers.sort((a, b) => b.exp - a.exp);

    // Handle course card click
    const handleCourseClick = (courseId) => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate(`/learning/${courseId}`);
        }
    };

    // Handle enroll button click
    const handleEnroll = (courseId) => {
        const course = data.find(course => course.id === courseId);
        setEnrolledCourses([...enrolledCourses, course]);
    };

    // Calculate total experience
    const totalExp = enrolledCourses.reduce((sum, course) => sum + (course.exp || 0), 0);

    return (
        <div className="course-page">
            <div className="course-header">
                <h1>Courses</h1>
                <div className="course-actions">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="web">Web Development</option>
                        <option value="data">Data Science</option>
                    </select>
                    <button onClick={() => setShowDashboard(!showDashboard)}>
                        <i className="fas fa-tachometer-alt"></i> Dashboard
                    </button>
                    <button onClick={() => setShowRanking(!showRanking)}>
                        <i className="fas fa-trophy"></i> Ranking
                    </button>
                </div>
            </div>

            {showDashboard && (
                <div className="dashboard">
                    <h2>Enrolled Courses</h2>
                    {enrolledCourses.length > 0 ? (
                        <div className="enrolled-courses">
                            {enrolledCourses.map(course => (
                                <div key={course.id} className="course-card">
                                    <h3>{course.title}</h3>
                                    <p>Progress: 0%</p>
                                    <p>Exp: {course.exp || 0}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>You are not enrolled in any courses yet.</p>
                    )}
                    <p>Total Exp: {totalExp}</p>
                </div>
            )}

            {showRanking && (
                <Ranking users={sortedUsers} currentUserId={currentUser.id} />
            )}

            <div className="course-grid">
                {filteredCourses.map(course => (
                    <div key={course.id} className="course-card" onClick={() => handleCourseClick(course.id)}>
                        <CourseCard {...course} onEnroll={() => handleEnroll(course.id)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursePage;